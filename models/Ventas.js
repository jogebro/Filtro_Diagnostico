const { Schema, model } = require('mongoose');

// Schema vacío ya que solo se hacen metodos get
const VentaSchema = new Schema({}); 

module.exports = model("Venta", VentaSchema, "Ventas");
