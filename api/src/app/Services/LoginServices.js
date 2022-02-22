import User from "../Model/Users.js";


class LoginServices {
    async storeUser(name, email, password, doc) {
        try{
            await User.create({name, email, password, doc});
            return true;
        } catch (error){
            console.log(error);
            return false
        }
    }
}

export default new LoginServices();