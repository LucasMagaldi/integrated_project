import { Router } from "express"
class Routes {
    constructor() {
        this.routes = Router();
        this.CreateRoutes();
    }

    CreateRoutes() {
        this.routes.get('/', (req,res) =>{
            return res.status(200).json({mensage: "Flamengo"})
        })
    }
}

export default new Routes().routes;