import { sequelize } from "../db";
import { DataTypes} from "sequelize";

export const Customer = sequelize.define(
    "customers",
    {
        name: DataTypes.STRING,
        website: DataTypes.TEXT,
        address: DataTypes.TEXT,
    },
        {
            timestamps: true,
            createdAt: 'created_on',
            updatedAt: 'modified_on'
        }
);