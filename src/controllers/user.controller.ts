import { User } from "../models/user.model";
import { Customer } from "../models/customer.model";
import { Request, Response } from "express";

export const getUsers = (res: Response) => {
  User.findAll({
    order: [["id", "ASC"]],
    include: [
      {
        model: Customer,
        attributes: ["name", "id"],
      },
    ],
  })
    .then((data) => {
      res.json(data);
      console.log(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

export const getUserById = (res: Response, id: number) => {
  User.findOne({
    where: { id: id },
    include: [
      {
        model: Customer,
        attributes: ["name", "id"],
      },
    ],
  })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

export const deleteUser = (res: Response, id: number) => {
    User.destroy({
        where: { id: id }
    }).then(()=>{
        res.status(200).json(`User deleted with ID: ${id}`)
    }).catch((err) => {
        res.status(500).send({
          message: err.message,
        });
      });
};

export const createUser = (req: Request, res: Response) => {
  const user = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    customerId: req.body.customerId,
    roleName: req.body.roleName,
  };
  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

export const updateUser = (req: Request, res: Response, id: number) => {

  const {
    firstName,
    middleName,
    lastName,
    email,
    phoneNumber,
    role,
    address,
    customer,
  } = req.body;
  try{
    User.update({firstName: firstName,middleName: middleName, lastName: lastName,email: email,phoneNumber: phoneNumber, address: address, RoleName: role, CustomerId: customer},
    {
        where: {
            id: id
        }
    }
    );
    res.status(200).send("Updated");   
}catch (error) {
    res.status(400).send(error);
}
};
