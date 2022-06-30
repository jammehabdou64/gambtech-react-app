const { getModel, FormRequest, bcrypt, Auth } = require("gambtech-lib");
const User = getModel("User");
class AuthRequest extends FormRequest {
  constructor(req) {
    super(req);
  }

  async loginRules() {
    return this.validate({
      email: ["required"],
      password: ["required", "min:6"],
    });
  }

  async registerRules() {
    return this.validate({
      name: ["required"],
      email: ["required", "email", "exist:User"],
      password: ["required", "min:6"],
    });
  }

  async save(req, res, next) {
    const validateData = await this.registerRules();
    if (validateData.errors) return res.redirect("/register");
    const user = await User.create({
      name: this.name,
      email: this.email,
      password: await bcrypt(this.password),
    });

    return user ? Auth.attempt(req, res, next) : res.redirect("/register");
  }

  async login(req, res, next) {
    const validateData = await this.loginRules();

    return validateData.errors
      ? res.redirect("/login")
      : Auth.attempt(req, res, next);
  }
}

module.exports = AuthRequest;
