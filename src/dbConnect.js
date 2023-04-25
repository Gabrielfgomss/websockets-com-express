import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';

const cliente = new MongoClient(`mongodb+srv://${dotenv.config().parsed.key_mongoDB}Alura@aluracluster.3t8wdac.mongodb.net/?retryWrites=true&w=majority`);

let documentosColecao;

try {
    await cliente.connect();

    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");
    console.log("Conectado ao MongoDB com sucesso")
} catch (erro) {
    console.log(erro)
}

export { documentosColecao }