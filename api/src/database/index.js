import sequelize from  'sequelize';
import MySQL from '../config/MySQL.js';

import User from '../app/Model/Users.js';
import Login from '../app/Model/Login.js';

const models = [User, Login];

class Database {
    constructor() {
        this.Init();
    }

    Init() {
        this.connection = new sequelize(MySQL);
        models.map(model => model.init(this.connection));
    }
}

export default new Database();