import mongoose from "mongoose";
const { Schema, model } = mongoose;

import { ProyectoModel } from '../proyecto/ModelProyect';
import { UsuarioModel } from '../usuario/ModelUser';


const inscriptionSchema = new Schema({
  estado: {
    type: String,
    enum: ['ACEPTADO', 'RECHAZADO', 'PENDIENTE'],
    default: 'PENDIENTE',
    required: true,
  },
  fechaIngreso: {
    type: Date,
    required: false,
  },
  fechaEgreso: {
    type: Date,
    required: false,
  },
  proyecto: {
    type: Schema.Types.ObjectId,
    ref: ProyectoModel,
    required: true,
  },
  // estudiante: {
  //   type: Schema.Types.ObjectId,
  //   ref: UsuarioModel,
  //   required: true,
  // },
});

const InscriptionModel = model('Inscripcion', inscriptionSchema);

export { InscriptionModel };