import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import auth from '../../config/auth.js';

export default async function(req,res,next) {
    const authHeader = req.headers['authorization'];
    const [ prefix, token ] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, auth.secret);
        if(!decoded) {
            return res.status(401).json({
                status: false, mensage: "Decoded fail"
            });
        }
        req.id = decoded.id;
        req.name = decoded.name   
        
        return next()
        } catch(error) {
        return res.status(500).json({status: false, mensage: "Error System"})
    }

}