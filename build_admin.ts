import { bundle } from "@adminjs/bundler";
import { adminJs } from "./admin/admin";

(async () => {
  await bundle({
    componentLoader: adminJs.componentLoader,
    destinationDir: "public",
  });
})();