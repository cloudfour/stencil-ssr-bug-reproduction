var copydir = require("copy-dir");

// Copy components to Express app
copydir("stencil-components/dist", "express-app/public/stencil", {});
