import jwt from 'jsonwebtoken';
import auth from '../../config/auth.js';

import LoginServices from "../Services/LoginServices.js";

class LoginController {
    async Create(req,res) {
        const { name, email, password, phone } = req.body;

        if(name == '' || name ==  ' ' || name.length <=2) {
            return res.status(400).json({mensage: 'Inform a valid name'});
        }
        if(email == '' || email ==  ' ') {
            return res.status(400).json({mensage: 'Inform a valid email address'});
        }
        if(password == '' || password ==  ' ') {
            return res.status(400).json({mensage: 'Choose a password'});
        }
        if(password.length < 8) {
            return res.status(400).json({mensage: 'Password must have more then 8 digits'});
        }
        const response = await LoginServices.storeUser(name, email, password, phone);
        if (!response) {
            return res.status(500).json({mensage:"Error System", status:false})
        }
        return res.status(200).json({mensage:"Pass", status:true})
    }

    async SignIn(req,res) {
        const { login, password } = req.body;
        const response = await LoginServices.signIn(login, password);

        if(!response) {
            return res.status(400).json({
                status: false, 
                mensage: "Invalid password"
            });
        }

        return res.status(200).json({
            status: true,
            token: jwt
            .sign(
                {id:response.id, name: response.name},
                auth.secret,
                {expiresIn: "1h"}
                )
        });
        
    }
}

export default new LoginController();