import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { hasUncaughtExceptionCaptureCallback } from "process";

//Configuration the .env file
dotenv.config();
//Create express
const app: Express = express();
const port: string | number = process.env.PORT || 8080;

//Interface configuration
interface saludo {
    mennsage: String;
  }

  let resultado: saludo = {
    
    mennsage: "Goodbye, world",
  };
  let mensaje: saludo = {
    
    mennsage: "Ezequiel",
  };
//define routes
app.get("/", (req: Request, res: Response) => {


  res.status(200).send(JSON.stringify(resultado));
});

app.get("/home", (req: Request, res: Response) => {
  res.status(200).send(('hola' + JSON.stringify(mensaje)));});


//listen on port
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
