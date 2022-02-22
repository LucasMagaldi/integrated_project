import dotenv from 'dotenv';
dotenv.config();


export default {
    
    dialect: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: 'America/Sao_Paulo',
    dialectOptions: {
        timezone: 'local'
    },
    define: {
        timestamps: true,
        underscored: true
    }
};
