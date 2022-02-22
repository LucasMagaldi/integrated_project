import { Router } from "express"
import LoginController from "./app/Controllers/LoginController.js";

class Routes {
    constructor() {
        this.routes = Router();
        this.CreateRoutes();
    }

    CreateRoutes() {
        this.routes.post('/acounts/signup', LoginController.Create);
    }
}

export default new Routes().routes;