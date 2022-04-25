import { Request, Response } from "express";
import { createUser, deleteUser, getUserById, getUsers } from "../controllers/user.controller";

export class Users {
  public routes(app): void {
    app.route("/users").get(async (req: Request, res: Response) => {
      await getUsers(res);
    });

    app.route("/users/:id").get(async (req: Request, res: Response) => {
      let id = Number(req.params.id);
      await getUserById(res,id)
    });

    app.route("/users").post(async (req: Request, res: Response) => {
      await createUser(req, res);
    });

    app.route("/users/:id").delete(async (req: Request, res: Response) => {
      let id = Number(req.params.id);
      await deleteUser(res, id);
    });

    app.route("/users/:id").put(async (req: Request, res: Response) => {
      let id = Number(req.params.id);
  
    });
  }
}
