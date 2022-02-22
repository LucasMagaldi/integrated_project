import LoginServices from "../Services/LoginServices.js";

class LoginController {
    async Create(req,res) {
        const { name, email, password, doc } = req.body;
        const response = await LoginServices.storeUser(name, email, password, doc);
        console.log(response);
        return res.status(200).json({ok:"OKOKOK"})
    }
}

export default new LoginController();