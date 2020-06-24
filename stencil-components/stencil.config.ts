import { Config } from "@stencil/core";
import { reactOutputTarget } from "@stencil/react-output-target";
// TODO: Figure out ValueAccessorConfig
// @see https://github.com/ionic-team/stencil-ds-plugins/issues/6
import { angularOutputTarget } from "@stencil/angular-output-target";

export const config: Config = {
  namespace: "stencil-components",
  taskQueue: "async",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader",
    },
    {
      type: "www",
      baseUrl: "http://localhost:3000/",
    },
    {
      type: "dist-hydrate-script",
    },
  ],
};
