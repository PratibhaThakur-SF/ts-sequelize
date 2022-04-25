import { Request, Response } from "express";
import { Role } from "../models/role.model";

export const getRoles = (res: Response) => {
    Role.findAll({
    attributes: ['key', 'name'], })
    .then(data => {
        res.json((data));
        console.log(data);
        
    })
    .catch(err => {
        res.status(500).send({
            message:err.message
        });
    });
};

export const createRole = (req: Request, res: Response) => {
   const role = {
       name: req.body.name,
       key: req.body.key,
       description: req.body.description
   } 
   Role.create(role)
   .then(data => {
       res.send(data);
   })
   .catch(err => {
       res.status(500).send({
           message: err.message
       });
   });
};