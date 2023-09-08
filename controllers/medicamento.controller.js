const Medicamento = require('../models/Medicamento.js');

//Funcion para ver los medicamentos con stock menor de 50
const getMedicamentosStock = async (req, res) => {
    try {
        //$lt va a mostrar los que sean menor al valor, en este caso 50
        const query = {stock: {$lt: 50}}
        const [total, medicamentos] = await Promise.all([
            Medicamento.countDocuments(query),
            //seleccionamos que datos queremos que se muestren segun la busqueda
            Medicamento.find(query).select('nombre stock')
        ]);
        //Se envia un json con la cantidad de objetos y sus datos
        res.json({
            total,
            medicamentos
        })
    } catch (error) {
        console.log(error);
    }
};

const getMedicamentosProveedor = async (req, res) => {
    try {
        //Seleccionamos a todos los datos
        const query = req.query
        const [total, medicamentos] = await Promise.all([
            Medicamento.countDocuments(query),
            //seleccionamos que datos queremos que se muestren segun la busqueda
            Medicamento.find(query).select('nombre proveedor')
        ]);
        //Se envia un json con la cantidad de objetos y sus datos
        res.json({
            total,
            medicamentos
        })
    } catch (error) {
        console.log(error);
    }
};

const getMedicamentosProveedorA = async (req, res) => {
    try {
        //Filtramos por medio del nombre ProveedorA
        const query = {'proveedor.nombre':'ProveedorA'}
        const [total, medicamentos] = await Promise.all([
            Medicamento.countDocuments(query),
            //seleccionamos que datos queremos que se muestren segun la busqueda
            Medicamento.find(query).select('nombre proveedor')
        ]);
        //Se envia un json con la cantidad de objetos y sus datos
        res.json({
            total,
            medicamentos
        })
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getMedicamentosStock,
    getMedicamentosProveedor,
    getMedicamentosProveedorA
};
