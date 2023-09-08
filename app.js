//se requiere el dotenv para acceder a las variables de entorno
require('dotenv').config()
//constante para requerir la clase Server
const Server = require('./models/server.js')
//se instancia la clase en una constante server
const server = new Server()
//llamamos a la funcion listen de la clase
server.listen()