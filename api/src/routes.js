import { Router } from "express"
import LoginController from "./app/Controllers/LoginController.js";
import Jwt from "./app/Middleware/Jwt.js";

class Routes {
    constructor() {
        this.routes = Router();
        this.CreateRoutes();
    }

    CreateRoutes() {
        this.routes.get('/', (req,res) => {
            console.log(req.headers);
            return res.status(200).json({})
        })
        this.routes.post('/acounts/signup', LoginController.Create);
        this.routes.post('/acounts/signin', LoginController.SignIn);
        this.routes.use(Jwt);
        this.routes.get('/main', (req,res) => {
            const { id, name } = req;
            return res.status(200).json({ id, name });
        })
    }
}

export default new Routes().routes;