import { PrismaClient } from "@prisma/client";
import { getBaseUrl } from "../utils/url";
import AdminJS, { type AdminJSOptions } from "adminjs";
import { Database, getModelByName, Resource } from '@adminjs/prisma'
const prisma = new PrismaClient()
AdminJS.registerAdapter({ Database, Resource })
export const options: AdminJSOptions = {
    resources:[
        {resource:{
            model: getModelByName("Products"), client: prisma
        },options:{navigation: ""}}
    ],
  assetsCDN: process.env.NODE_ENV === "production" ? getBaseUrl() : undefined,
  rootPath: "/admin",
  branding: {
    logo: false,
    companyName: "Thrifty Gaming",
    withMadeWithLove: false,
  },
};

export const adminJs = new AdminJS(options);