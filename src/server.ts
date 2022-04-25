import app from "./app";
import { sequelize } from "./db";
const PORT = 3000;

sequelize.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });

sequelize.sync()
  .then(() => {
    app.listen(PORT, "localhost", () => {
      console.log(`listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log("Error: " + err));
