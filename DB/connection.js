import { Sequelize } from "sequelize";

const sequelize = new Sequelize('Kerolos-Saaid_mon&thu_3-6_Assignment_5_01553609829', "root", "", {
    host: 'localhost',
    dialect: 'mysql'
})

const connectDB = async () => {
    return await sequelize.sync({ alter: false }).then(Result => {
        console.log(`DB Connected`);
    }).catch(err => {
        console.log(`Failed to connect to database.......${err}`);
    });
}

export {
    sequelize,
    connectDB
};