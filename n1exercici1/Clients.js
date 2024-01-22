
var mongoose = require('mongoose');var Schema = mongoose.Schema;var Clients = new Schema({IDClient: {type: Schema.Types.ObjectId, required: true},Nom: {type: String, required: true},Informacio: {
Adreça: {
Carrer: {type: String, required: true},Numero: {type: Number, required: true},Pis: {type: String},Porta: {type: String},Ciutat: {type: String, required: true},Codi Postal: {type: String, required: true},Pais: {type: String, required: true}},Telefon: {type: Number, required: true},Correu Electronic: {type: String, required: true},Data Registre: {type: Date, required: true}},Compres: [{
IDCompra: {type: Schema.Types.ObjectId, required: true},Ulleres: {
IDUlleres: {type: Schema.Types.ObjectId, required: true},Marca: {type: String, required: true},Graduacio: {
Esquerra: {type: Number, required: true},Dreta: {type: Number, required: true}},Color Vidre: {
Esquerra: {type: String},Dreta: {type: String}},Montura: {type: String, required: true},Preu: {type: Number, required: true}}}]}); 