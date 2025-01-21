import AdminJSExpress from "@adminjs/express";
import express, { Request, Response } from "express";
import { adminJs } from "../lib/admin";

const adminRouter = AdminJSExpress.buildRouter(adminJs);

const app = express();

app.use(adminJs.options.rootPath, adminRouter);

if (process.env.NODE_ENV === "development") {
  adminJs.watch();
}

const handler = (req: Request, res: Response) => {
  app(req, res);
};

export default handler;

export const config = {
  api: {
    // Defaults to true. Setting this to false disables body parsing and allows you to consume the request body as stream or raw-body.
    bodyParser: false,

    // Disables warnings for unresolved requests if the route is being handled by an external resolver like Express.js or Connect. Defaults to false.
    externalResolver: true,
  },
};