import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos.model";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "123456789",
  database: "todos",
  logging: false,
  models: [Todos],
});

export default connection;