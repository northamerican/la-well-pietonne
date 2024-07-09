import { Address6 } from "ip-address";

export default function getIpOrSubnet(ipStr: string) {
  if (Address6.isValid(ipStr)) {
    const ip = new Address6(ipStr);
    return ip.parsedAddress.slice(0, 4).join(":");
  }
  return ipStr;
}
