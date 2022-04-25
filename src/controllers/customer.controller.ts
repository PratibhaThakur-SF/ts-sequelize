import { Request, Response } from "express";
import { Customer } from "../models/customer.model";
export const getCustomers = (res: Response) => {
    Customer.findAll({
    attributes: ['id', 'name'], })
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

export const createCustomer = (req: Request, res: Response) => {
   const customer = {
       name: req.body.name,
       website: req.body.website,
       address: req.body.address
   } 
   Customer.create(customer)
   .then(data => {
       res.send(data);
   })
   .catch(err => {
       res.status(500).send({
           message: err.message
       });
   });
};