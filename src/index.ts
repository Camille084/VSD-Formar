import express from "express";
import { mainModule } from "process";
import sequelize from "sequelize";

const app = express();
const port = 3000;


app.get("/", (req, res) => {
  res.send("Hello World!");
});




main()

async function main() {
  if (require.main === module) {
    await sequelize.sync({ force: true }).then( )
  }
}




