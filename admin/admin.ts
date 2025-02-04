import { PrismaClient } from "@prisma/client";
import { getBaseUrl } from "../utils/url";
import AdminJS, { type AdminJSOptions } from "adminjs";
import { Database, getModelByName, Resource } from "@adminjs/prisma";

const prisma = new PrismaClient();

AdminJS.registerAdapter({ Database, Resource });

export const options: AdminJSOptions = {
  resources: [
    // Product model
    {
      resource: {
        model: getModelByName("Product"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // Review model
    {
      resource: {
        model: getModelByName("Review"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // User model
    {
      resource: {
        model: getModelByName("User"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // OrderInfo model
    {
      resource: {
        model: getModelByName("OrderInfo"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // OrderItem model
    {
      resource: {
        model: getModelByName("OrderItem"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // Cart model
    {
      resource: {
        model: getModelByName("Cart"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // CartItem model
    {
      resource: {
        model: getModelByName("CartItem"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // Brand model
    {
      resource: {
        model: getModelByName("Brand"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // Category model
    {
      resource: {
        model: getModelByName("Category"),
        client: prisma,
      },
      options: { navigation: "" },
    },
    // Tag model
    {
      resource: {
        model: getModelByName("Tag"),
        client: prisma,
      },
      options: { navigation: "" },
    },
  ],
  assetsCDN: "https://thrifty-gaming.vercel.app/",
  rootPath: "/admin",
  branding: {
    logo: false,
    companyName: "Thrifty Gaming",
    withMadeWithLove: false,
  },
};

export const adminJs = new AdminJS(options);
