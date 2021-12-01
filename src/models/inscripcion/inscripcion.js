import mongoose from 'mongoose';
import { ProjectSchema } from '../project/ModelProyect';
import { UserSchema } from '../users/ModelUser';

const { Schema, model } = mongoose;


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
    ref: ProjectSchema,
    required: true,
  },
  estudiante: {
    type: Schema.Types.ObjectId,
    ref: UserSchema,
    required: true,
  },
});

const InscriptionModel = model('Inscripcion', inscriptionSchema);

export { InscriptionModel };