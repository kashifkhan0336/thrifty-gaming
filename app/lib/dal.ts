import "server-only"

import { getSession } from "./auth"
import { cache } from "react"
import { redirect } from "next/navigation"

export const verifySession = cache(async ()=>{
    const session = await getSession();
    if(!session?.userInfo){
        redirect("/auth/login")
    }
    return { isAuth: true, userId: session.userInfo.email}
})