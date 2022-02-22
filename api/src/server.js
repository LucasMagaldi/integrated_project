import app from "./app.js";
import connection from './config/connection.js'
import dotenv from 'dotenv';

dotenv.config();

/*connection
    .authenticate()
    .then(()=>{
        console.log("DB Connection")
    }).catch((e)=>{
        console.log(e)
    });*/


app.listen(3000, () => {
    console.log("Play")
})