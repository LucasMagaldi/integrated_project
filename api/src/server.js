import app from "./app.js";
import connection from './config/connection.js'
import dotenv from 'dotenv';

dotenv.config();

connection
    .authenticate()
    .then(()=>{
        console.log("DB Connection")
    }).catch((e)=>{
        console.log(e)
    });


app.listen(process.env.PORT, () => {
    console.log("Play", process.env.PORT);
})