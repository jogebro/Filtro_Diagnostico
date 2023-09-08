const { Schema, model } = require('mongoose');

// Schema vacío ya que solo se hacen metodos get
const MedicamentoSchema = new Schema({}); 

module.exports = model("Medicamento", MedicamentoSchema, "Medicamentos");
