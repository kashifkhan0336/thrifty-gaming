import { IronSession, SessionOptions, getIronSession } from 'iron-session';
import { cookies } from 'next/headers';
import * as client from 'openid-client';

export const clientConfig = {
  url: process.env.NEXT_PUBLIC_API_URL,
  audience: process.env.NEXT_PUBLIC_API_URL,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  scope: process.env.NEXT_PUBLIC_SCOPE,
  redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}/auth/openiddict`,
  post_logout_redirect_uri: `${process.env.NEXT_PUBLIC_APP_URL}`,
  response_type: 'code',
  grant_type: 'authorization_code',
  post_login_route: `${process.env.NEXT_PUBLIC_APP_URL}`,
  code_challenge_method: 'S256',
}

export interface SessionData {
  isLoggedIn: boolean;
  access_token?: string;
  id_token?: string;
  code_verifier?: string;
  state?: string;
  userInfo?: {
    sub: string;
    name: string;
    email: string;
    email_verified: boolean;
    roles?: {
      [role: string]: {
        [projectId: string]: string; // Mapping project IDs to domains or additional details
      };
    };
  };
}


export const defaultSession: SessionData = {
  isLoggedIn: false,
  access_token: undefined,
  code_verifier: undefined,
  state: undefined,
  userInfo: undefined,
}

export const sessionOptions: SessionOptions = {
  password: process.env.NEXT_IRON_SESSION_SECRET!,
  cookieName: 'thrifty_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
  ttl: 60 * 60 * 24 * 7, // 1 week
}

export async function getSession(): Promise<IronSession<SessionData>> {
  const cookiesList = await cookies()
  const session = await getIronSession<SessionData>(cookiesList, sessionOptions)
  if (!session.isLoggedIn) {
    session.access_token = defaultSession.access_token
    session.userInfo = defaultSession.userInfo
  }
  return session
}

export async function getClientConfig() {
  return await client.discovery(new URL(clientConfig.url!), clientConfig.client_id!)
}


export async function getEncodedMessage(message: string) {
  const encoder = new TextEncoder();
  return encoder.encode(message)
}

export async function importKey(rawKey: string) {
  const keyData = new TextEncoder().encode(rawKey);
  return await crypto.subtle.importKey(
    "raw",
    keyData, {
      name: "HMAC",
      hash: {
        name: "SHA-512"
      }
    },
    false,
    ["sign", "verify"]
  )
}
export async function signMessage(key: CryptoKey, message: string) {
  const encodedMessage = await getEncodedMessage(message);
  const signature = await crypto.subtle.sign("HMAC", key, encodedMessage);
  return signature;
}

export async function verifyMessage(key: CryptoKey, message: string, signature: ArrayBuffer) {
  const encodedMessage = await getEncodedMessage(message);
  const result = await window.crypto.subtle.verify("HMAC", key, signature, encodedMessage);
  return result; // true if valid, false otherwise
}