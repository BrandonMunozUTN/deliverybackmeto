import { config } from "dotenv";
config();

export const settings = {
    port: process.env.PORT || 8081,
    dbUser: process.env.DB_USER || "",
    dbPassword: process.env.DB_PASSWORD || "",
    dbServer: process.env.DB_SERVER || "",
    dbDatabase: process.env.DB_DATABASE || "",
}
