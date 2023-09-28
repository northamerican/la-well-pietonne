import { Handler } from '@netlify/functions'
import { StatusCodes } from 'http-status-codes'
import MailerLite from 'mailerlite-api-v2-node'

const mailerLite = MailerLite(process.env.MAILER_LITE_API_KEY)

const groupIds = {
  general: process.env.MAILER_LITE_GROUP_ID
}

export const handler: Handler = async ({ body }) => {
  try {
    const fields = JSON.parse(body)
    const group = fields && fields.group
    const groupId = group ? groupIds[group] : groupIds.general

    if (!fields.email) {
      throw new Error('Email not specified')
    }

    const mailerResponse = await mailerLite.addSubscriberToGroup(groupId, fields)

    return {
      statusCode: StatusCodes.CREATED,
      body: JSON.stringify(mailerResponse)
    }
  } catch (error) {
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: error.toString()
    }
  }
}
