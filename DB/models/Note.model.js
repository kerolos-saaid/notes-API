import { DataTypes } from 'sequelize';
import { sequelize } from '../connection.js';
const notesModel = sequelize.define('note', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(1000),
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }
}, { timestamps: false });

export default notesModel;