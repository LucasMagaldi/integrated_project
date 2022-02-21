import { Router } from "express"
class Routes {
    constructor() {
        this.routes = Router();
    }
}

export default new Routes().routes;