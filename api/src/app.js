import express from  'express'
import cors from 'cors';

class App {
    constructor() {
        this.server = express();
    }

    MiddlewareConfig() {
        this.server.use(express.json());
    }

    ConfigCors() {
        this.server.use(cors());
    }
}

export default new App().server;