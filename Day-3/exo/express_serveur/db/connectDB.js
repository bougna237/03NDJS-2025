import mongoose from "mongoose";

mongoose
 .connect("mongodb://localhost:27017/<db_name>")
 .then(() => console.log("Connected"))
 .catch((err) => console.error("connection error: ",
err));
*créer un dossier models et un fichier User.js a l’intérieur
