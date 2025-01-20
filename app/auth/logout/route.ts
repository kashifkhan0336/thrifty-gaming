import { defaultSession, getClientConfig, getSession } from '@/app/lib/auth'
import * as client from 'openid-client'

export async function GET() {
  const session = await getSession()
  const openIdClientConfig = await getClientConfig()
  const endSessionUrl = client.buildEndSessionUrl(openIdClientConfig)
  session.isLoggedIn = defaultSession.isLoggedIn
  session.access_token = defaultSession.access_token
  session.userInfo = defaultSession.userInfo
  session.code_verifier = defaultSession.code_verifier
  session.state = defaultSession.state
  await session.save()
  return Response.redirect(endSessionUrl.href)
}
