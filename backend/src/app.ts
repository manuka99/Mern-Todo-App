import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes";

const app: Express = express();

app.use(cors());

// parse body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use(todoRoutes);

export default app;
