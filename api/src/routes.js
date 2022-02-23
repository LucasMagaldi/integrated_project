import { Router } from "express"
import LoginController from "./app/Controllers/LoginController.js";
import Jwt from "./app/Middleware/Jwt.js";

class Routes {
    constructor() {
        this.routes = Router();
        this.CreateRoutes();
    }

    CreateRoutes() {
        this.routes.post('/acounts/signup', LoginController.Create);
        this.routes.post('/acounts/signin', LoginController.SignIn);
        this.routes.use(Jwt);
        this.routes.get('/main', (req,res) => {
            return res.status(200).json(10);
        })
    }
}

export default new Routes().routes;