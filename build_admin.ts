import { bundle } from "@adminjs/bundler";
import { adminJs } from "./pages/lib/admin";

(async () => {
  await bundle({
    componentLoader: adminJs.componentLoader,
    destinationDir: "public",
  });
})();