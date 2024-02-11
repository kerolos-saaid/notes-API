import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
import notesModel from './Note.model.js';

const userModel = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.INTEGER
    },
}, { timestamps: false }
)
userModel.hasMany(notesModel,
    {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }
);
notesModel.belongsTo(userModel)
export default userModel;