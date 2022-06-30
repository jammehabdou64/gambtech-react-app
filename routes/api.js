const { ApiRoute, getApiController, asyncHandler } = require("gambtech-lib");

/**
 *
 * Api Routes
 */

ApiRoute.get("/", (req, res) => res.json({ message: "Hello" }));
