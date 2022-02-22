import express from  'express'
import cors from 'cors';

import './database/index.js'
import routes from './routes.js';

class App {
    constructor() {
        this.server = express();
        this.MiddlewareConfig();
        this.ConfigCors();
        this.Routes();
    }

    MiddlewareConfig() {
        this.server.use(express.json());
    }

    ConfigCors() {
        this.server.use(cors());
    }

    Routes() {
        this.server.use(routes);
    }
}

export default new App().server;