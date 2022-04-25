import { sequelize } from "../db";
import { DataTypes} from "sequelize";
import { Customer } from "./customer.model";
import { Role } from "./role.model";
export const User = sequelize.define(
    "user2",
    {
        firstName: DataTypes.STRING,
        middleName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.TEXT,
        phoneNumber: DataTypes.BIGINT,
        address: DataTypes.TEXT,
        customerId: {
          type: DataTypes.INTEGER,
          references:{
            model: "customers",
            key: "id"
          }
        },
        roleName: {
          type: DataTypes.STRING,
          references: {
            model: "roles",
            key: "name"
          }
        },
    },
        {
            timestamps: true,
            createdAt: 'created_on',
            updatedAt: 'modified_on'
        }
);
Customer.hasOne(User);
User.belongsTo(Customer);
Role.hasMany(User);
User.belongsTo(Role);
