import Sequelize, { Model } from 'sequelize';


class Login extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                info: Sequelize.STRING
            },
            {sequelize}
        );
        return this;
    }
}

export default Login;