import { Handler } from '@netlify/functions'
import { translations } from '../../../astro.i18n.config'
import { StatusCodes } from 'http-status-codes'

export const handler: Handler = async ({ body }) => {
  
  try {
    const { email, lang = 'fr' } = JSON.parse(body)
    
    const montrealRegistration = 'https://api.montreal.ca/api/it-platforms/security/v1/tickets/registration'
    const data = {
      email,
      language: lang,
      redirectUri: translations[lang].petitionUrl
    }

    // Register email address on montreal.ca
    const response = await fetch(montrealRegistration, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const responseJson = await response.json()

    // Invalid email
    const invalidEmailError = responseJson.error?.code === 'invalidParameter'
    if (invalidEmailError) {
    // TODO validation, no pluses
      return {
        statusCode: StatusCodes.BAD_REQUEST,
      }
    }
  
    // Email already has account on montreal.ca
    // Instruct user to proceed with petition signing
    const hasMontrealAccount = responseJson.error?.code === 'accountAlreadyExists'
    if (hasMontrealAccount) {
      return {
        statusCode: StatusCodes.OK,
      }
    }
  
    // Account created on montreal.ca
    // Instruct user to proceed via email confirmation from montreal.ca
    const accountCreated = responseJson.email
    if (accountCreated) {
      return {
        statusCode: StatusCodes.CREATED,
      }
    }

    // Else unknown error
    // Fail silently by redirecting to the petition
    throw new Error(JSON.stringify(responseJson))
  } catch (error) {
    return {
      statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
      body: JSON.stringify({
        error
      })
    }
  }
}
