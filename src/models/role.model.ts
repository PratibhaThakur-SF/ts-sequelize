import { sequelize } from "../db";
import { DataTypes} from "sequelize";

export const Role = sequelize.define(
    "role",
    {
        name: {type: DataTypes.STRING, primaryKey: true, unique: true},
        key: {
            type: DataTypes.ENUM("superadmin","admin","subscriber")
        },
        description: DataTypes.TEXT,
    },
        {
            timestamps: true,
            createdAt: 'created_on',
            updatedAt: 'modified_on'
        }
);