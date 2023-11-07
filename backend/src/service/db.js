// Importiere MongoClient des mongodb Pakets für den Verbindungsaufbau zur Datenbank (DB)
import mongoose from "mongoose";
import dotenv from "dotenv";

// Lade Enviroment Variablen aus der .env Datei
dotenv.config();


export async function connectToDb() {
    try {
        const conn = await mongoose.connect(process.env.ATLAS_URI, {
            dbName: process.env.DB_NAME
        });
        console.log('Connection to DB established!');

    } catch (error) {
        console.log(error);
    process.exit(1);
    }
}