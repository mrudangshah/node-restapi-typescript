import { Router } from "express";
import { LoginController } from "./login.controller";
 class LoginRoutes {
     private loginController : LoginController = new LoginController();
    router: Router;
    constructor() {
        this.router = Router();
        this.init();
    }

    init() {
        this.router.get("/", this.loginController.checkResponse);
        this.router.post("/", this.loginController.login);
        this.router.post("/redirect", this.loginController.redirectLogin);
    }
}

const loginRoutes = new LoginRoutes();
loginRoutes.init();

export default loginRoutes.router;