import { ModeloAvance } from './avance.js';

const resolversAvance = {
  Query: {
    allAvances: async (parent, args) => {
      const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
      console.log(avances);
      if (avances.length == 0) { console.log("No hay Registros en la base de datos"); }
      else { return avances; } 
    }, 
    Avances: async (parent, args) => {
      const avances = await ModeloAvance.find().populate('proyecto').populate('creadoPor');
      return avances;
    },
    filtrarAvance: async (parents, args) => {
      const avanceFiltrado = await ModeloAvance.find({ proyecto: args._id })
        .populate('proyecto')
        .populate('creadoPor');
      return avanceFiltrado;
    },
  },
  Mutation: {
    crearAvance: async (parents, args) => {
      
      const avanceCreado = await ModeloAvance.create({
        fecha: args.fecha,
        descripcion: args.descripcion,
        proyecto: args.proyecto,
        creadoPor: args.creadoPor,
      });
      console.log(avanceCreado);
      return avanceCreado;
    },
  },
};

export { resolversAvance };