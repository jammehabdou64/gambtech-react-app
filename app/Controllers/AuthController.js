const { getRequest } = require("gambtech-lib");

const AuthRequest = getRequest("AuthRequest");
class AuthController {
  async register(req, res, next) {
    const authRequest = new AuthRequest(req);
    return authRequest.save(req, res, next);
  }

  async login(req, res, next) {
    const authRequest = new AuthRequest(req);
    return authRequest.login(req, res, next);
  }

  home(req, res, next) {
    return res.render("home", { name: req.user.name });
  }
}

module.exports = new AuthController();
