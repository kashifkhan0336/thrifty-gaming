import { NextRequest } from "next/server";

import { getSession } from "./app/lib/auth";
const protectedRoutes = ['/dashboard']
const publicRoutes = ['/login']

export default async function middleware(req: NextRequest){
    const path = req.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)
    console.log(path,isProtectedRoute)
    console.log(path,isPublicRoute)
    //const cookie = (await cookies()).get('thrifty_session')?.value
    
    console.log("session ->",await getSession())
}