import { Request, Response } from "express";
import { getCustomers, createCustomer } from "../controllers/customer.controller";
export class Customers {
  public routes(app): void {
    app.route("/customers").get(async (req: Request, res: Response) => {
      await getCustomers(res);
    });

    app.route("/customers").post(async (req: Request, res: Response) => {
      await createCustomer(req, res);
    });
  }
}
