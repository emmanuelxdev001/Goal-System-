import express, { Application } from "express";
import cors from "cors";
import { dbConfig } from "./utils/dbConfig";


const port: number = 2209;
const app: Application = express();

app.use(express.json())

app.use(express.json());
app.use(cors({origin: "*" }));

app.listen(port, () => {
    console.clear();
    console.log("connect....server....done"); 
    dbConfig();
});