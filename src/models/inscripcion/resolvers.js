import { InscriptionModel } from './inscripcion.js';

const resolverInscripciones = {
  Query: {
    allInscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      if (inscripciones.length == 0) { console.log("No hay Registros en la base de datos"); }
      else { return inscripciones; } 
    }, 
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      return inscripciones;
    },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: 'ACEPTADO',
          fechaIngreso: Date.now(),
        },
        { new: true }
      );
      return inscripcionAprobada;
    },
  },
};

export { resolverInscripciones };