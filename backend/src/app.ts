import express, { Express } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes";
import { handleError } from "./middlewares/handleError";

const app: Express = express();

app.use(cors());

// parse body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use("/api", todoRoutes);

/* ERRORS */
app.use(handleError);

export default app;
