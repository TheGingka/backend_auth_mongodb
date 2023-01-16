const mongoose = require("mongoose");

dbConnection().catch(err => console.log(err));

async function dbConnection(){
    await mongoose.connect('mongodb+srv://txnio:txnio@cluster0.787jfi5.mongodb.net/test');
    console.log("DB conectadas")
}