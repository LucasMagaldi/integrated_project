import User from "../Model/Users.js";
import Login from '../Model/Login.js';
import bcrypt from 'bcrypt';

class LoginServices {
    async storeUser(name, email, password, phone) {
        try{
            const hashPassword = await bcrypt.hash(password, 10);
            try{
                await User.create({name, email, password:hashPassword, phone});
            } catch(error){
                return false;
            }
            
            return true;
        } catch (error){
            console.log(error);
            return false
        }
    }

    async signIn(login, loginPassword) {
        try {
            const isEmail = login.indexOf('@');
            if(isEmail === -1){
                const response = await this.findByPhone(login);

                const success = await bcrypt.compare(loginPassword, response.password);
                if(!success) return false

                const { id, name } = await Login.create({
                    name: response.name,
                    email: response.email,
                    info: `Sign via phone number: ${login}`
                });
                return { id, name }
            }

            const response = await this.findByEmail(login);
            const success = await bcrypt.compare(loginPassword, response.password);
            if(!success) return false

            const { id, name } = await Login.create({
                    name: response.name,
                    email: response.email,
                    info: `Sign via email: ${login}`
                });
             return { id, name }
        } catch (e){
            console.log(e);
            return false;
        }
    }

    async findByEmail(login) {
        const emailAddress = login;
        try {
            const { name, email, password } = await User.findOne({
                where: { email: emailAddress },
                attributes: ["name", "email", "password"]
            });
            
            return {name, email, password}
        } catch(error) {
            console.log(error);
            return false
        }
    }

    async findByPhone(phone) {
        const number = phone
        try {
            const { name, email, password } = await User.findOne({
                where: { phone:number },
                attributes: ["name", "email", "password"]
            });
            
            return {name, email, password}
        } catch(error) {
            console.log(error);
            return false
        }
    }
}

export default new LoginServices();