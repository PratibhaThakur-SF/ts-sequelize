import {Sequelize} from "sequelize";
export const sequelize = new Sequelize('userdata', 'postgres', 'source', {
    host: 'localhost',
    dialect:'postgres'
})