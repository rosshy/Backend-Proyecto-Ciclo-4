import mongoose from 'mongoose';
import { UserModel } from '../usuario/ModelUser';
const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    Nombre: { type: String, required: true, unique: true },
    Ob_Generales: { type: String, required: true },
    Ob_Especificos: { type: String, required: true },
    Presupuesto: { type: Number, required: true },
    Fecha_Inicio: { type: Date, required: true, default: new Date() },
    Fecha_Terminacion: { type: Date, required: false, defautl: "Null" },
    Id_Lider: { type: String, required: true },
    Nom_Lider: { type: String, required: true },
    Estado: { type: String, enum: [ "ACTIVO", "INACTIVO" ], 
        required: true, default: "INACTIVO" },
    Fase: { type: String, 
        enum: [ "INICIADO", "EN_DESARROLLO", "TERMINADO", "NULO" ],
        required: true, default: "NULO" },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }, 
  }
);

projectSchema.virtual('avances', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'proyecto',
});

projectSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'proyecto',
});

const ProyectoModel = model('Proyecto', projectSchema);

export { ProyectoModel };