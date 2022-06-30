const { Route } = require("gambtech-lib");
const getRoot = require("app-root-path").path;
/**
 *
 * Spa Route public/client/build
 */

Route.any((req, res) => res.sendFile(`${getRoot}/public/index.html`));
