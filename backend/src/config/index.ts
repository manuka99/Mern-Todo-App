import * as dotenv from "dotenv";
dotenv.config();

const DB_URI = process.env.DB_URI as string;
const SERVER_PORT: string | number = process.env.SERVER_PORT || 4000;

export { DB_URI, SERVER_PORT };
