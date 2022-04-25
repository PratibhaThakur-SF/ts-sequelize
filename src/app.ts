import express from "express";
import * as bodyParser from "body-parser";
import { Users } from "./routes/users";
import { Roles } from "./routes/roles";
import { Customers } from "./routes/customers";
import cors from "cors";
class App {
  public app: express.Application;
  public userRoutes: Users = new Users();
  public customerRoutes: Customers = new Customers();
  public roleRoutes: Roles = new Roles();

  constructor() {
    this.app = express();
    this.config();
    this.userRoutes.routes(this.app);
    this.customerRoutes.routes(this.app);
    this.roleRoutes.routes(this.app);
  }
  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );
  }
}
export default new App().app;
