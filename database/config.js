//se requiere a mongoose para conectar a la base de datos
const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        //conectamos con la url en nuestro .env
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB ONLINE');
    } catch (error) {
        console.log(error);
        throw new Error('DB NO CONECTADA')
    }
}

module.exports = {
    dbConnection
}