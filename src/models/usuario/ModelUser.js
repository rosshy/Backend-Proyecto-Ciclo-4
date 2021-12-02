import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    Identificacion: { type: String, required: true, unique: true },
    Nombre: { type: String, required: true },
    Apellido: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Rol: { type: String, required: true },
        enum: ["ESTUDIANTE", "LIDER", "ADMINISTRADOR"],         
    Estado: { type: String, required: true, default: "PENDIENTE",
        enum: ["PENDIENTE", "AUTORIZADO", "NO_AUTORIZADO"], }
  });

userSchema.virtual('proyectosLiderados', {
  ref: 'Proyecto',
  localField: '_id',
  foreignField: 'lider',
});

userSchema.virtual('avancesCreados', {
  ref: 'Avance',
  localField: '_id',
  foreignField: 'creadoPor',
});

userSchema.virtual('inscripciones', {
  ref: 'Inscripcion',
  localField: '_id',
  foreignField: 'estudiante',
});

const UserModel = mongoose.model('Usuario', userSchema);

export { UserModel };
