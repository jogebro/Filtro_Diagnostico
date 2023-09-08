//Requerir dependencias
const express = require('express')
const cors = require('cors')
//Requerir conexion a la base de datos
const {dbConnection} = require('../database/config.js')

class Server{
    constructor(){
        //variable para tener todo el poder de express
        this.app = express()
        //variable para asignar el puerto en el .env
        this.port = process.env.PORT
        //paths para la url
        this.paths = {
            pathMedicamentos : "/medicamentos",
            pathVentas : "/ventas"
        }
        //Conexion DB
        this.connectDB();
        //Middlewares
        this.middleware();
        //Rutas
        this.routes();
    }

    //funcion asincrona para la conexion
    async connectDB(){
        await dbConnection()
    }

    middleware(){
        //cors
        this.app.use(cors());
        //Leer y parsear un JSON en body
        this.app.use(express.json())
        //public directory
        this.app.use(express.static('public'))
    }
    //funcion para usar cada ruta
    routes(){
        this.app.use(this.paths.pathMedicamentos, require('../routes/medicamento.routes.js'))
        this.app.use(this.paths.pathVentas, require('../routes/venta.routes.js'))
    }
    //funcion para escuchar el servidor
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Running in port: ${this.port}`);
        })
    }
}
//exportacion para que sea accesible a cualquier archivo
module.exports = Server