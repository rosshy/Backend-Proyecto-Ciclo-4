import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ProjectSchema = new Schema ( {
    
    Nombre: { type: String, required: true, unique: true },
    Ob_Generales: { type: String, required: true },
    Ob_Especificos: { type: String, required: true },
    Presupuesto: { type: Number, required: true },
    Fecha_Inicio: { type: Date, required: true, default: new Date() },
    Fecha_Terminacion: { type: Date, required: false, defautl: "Null" },
    Id_Lider: { type: String, required: true },
    Nom_Lider: { type: String, required: true },
    Avance: [{
        CreadoPor: { type: String, required: true },
        Fecha_Inicio: { type: Date, required: true, default: new Date() },
        Descripcion: { type: String, required: true },
        Observaciones: { type: String, requered: true, default: "Null" }
    }],
    Estado: { type: String, enum: [ "ACTIVO", "INACTIVO" ], 
        required: true, default: "INACTIVO" },
    Fase: { type: String, 
        enum: [ "INICIADO", "EN_DESARROLLO", "TERMINADO", "NULO" ],
        required: true, default: "NULO" },  
    Est_Inscritos: [{
        _id: false,
        Id_Estud: { type: String, required: true, unique: true },
        Nom_Estud: { type: String, required: true },
        Email: { type: String, required: true, unique: true },
        Estado_Estud: { type: String, required: true, default: "PENDIENTE" }
    }]  
});

const ProjectModel = mongoose.model('Proyecto', ProjectSchema);
export default ProjectModel;