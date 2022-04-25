import { Request, Response } from "express";
import { createRole, getRoles } from "../controllers/role.controller";
export class Roles {
  public routes(app): void {
    app.route("/roles").get(async (req: Request, res: Response) => {
      await getRoles(res);
    });

    app.route("/roles").post(async (req: Request, res: Response) => {
      await createRole(req, res);
    });
  }
}
