import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export const connection = new Sequelize(
        process.env.DB_BASE, //Database
        process.env.DB_USER, //Usuário
        process.env.DB_PASS, //Senha
        {
            host: process.env.DB_LOCAL,//URL do meu dados
            port: 5432,//Porta que está o banco de dados
            dialect: 'postgres' //Qual banco de dados o Sequelize está trabalhando
        }
    )
//     'postgres://locadora_user:NLkmHLfnZIWcHMUXIxsmXcRvWJ1R18Q8@dpg-c9rghhr0tnuoark2f2e0-a.oregon-postgres.render.com/locadora',
//     {
//         dialect: 'postgres',
//         dialectOptions: {
//             ssl: {
//                 require: true,
//                 rejectUnauthorized: false
//             }
//         }
//     }
// )