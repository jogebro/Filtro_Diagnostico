const Venta = require('../models/Ventas.js')

const getRecetasFecha = async (req, res) => {
    try {
        //Se filtra con $gte que significa mayor a la fecha
        const query = {fechaVenta: {$gte: new Date('2023-01-02')}}
        const [total, venta] = await Promise.all([
            Venta.countDocuments(query),
            //seleccionamos que datos queremos que se muestren segun la busqueda
            Venta.find(query).select('nombre stock fechaVenta')
        ]);
        //Se envia un json con la cantidad de objetos y sus datos
        res.json({
            total,
            venta
        })
    } catch (error) {
        console.log(error);
    }
};

const getVentaParacetamol = async (req, res) => {
    try {
        //Filtramos por el nombre de medicamento Paracetamol 
        const query = {'medicamentosVendidos.nombreMedicamento':'Paracetamol'}
        const [total, venta] = await Promise.all([
            Venta.countDocuments(query),
            Venta.find(query)
        ]);
        
        res.json({
            total,
            venta
        })
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getRecetasFecha,
    getVentaParacetamol
};
