import mongoose, { mongo } from "mongoose";

async function conectaNaDataBase() {
    mongoose.connect("mongodb+srv://admin:admin123@cluster0.h0jkz5i.mongodb.net/livraria=Cluster0");

    return mongoose.connection
    
};

export default conectaNaDataBase;