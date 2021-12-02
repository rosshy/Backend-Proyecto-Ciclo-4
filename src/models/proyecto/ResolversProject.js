import {ProyectoModel} from "./ModelProyect";

const resolversProject = {
    Query: {
        allProyectos: async (parent, args) => {
            const projects = await ProyectoModel.find();
            if (projects.length == 0) { console.log("No hay Registros en la base de datos"); }
            else { return projects; } 
        }, 
        getOneProject: async (parent, args) => {
            const query = { _id: args._id };
            const project = await ProyectoModel.findById(query);
            if (project) { return project; } 
            else { console.log("El ID " + args._id + " No Existe en DB"); }
        },
    }, 
    Mutation: {
        addProject: async (parent, args) => {
            console.log(args);
            const query = { Nombre: args.Nombre };
            const projectDB = await ProyectoModel.find(query);    
            if (projectDB.length == 0) {                    
                const projectCreado = await ProyectoModel.create(args); 
                return projectCreado;
            } else { console.log(`${args.Nombre} ya estaba registrado !!`); }                          
        }, 
        deleteProject: async (parent, args) => {
            const query = { _id: args._id };
            const project = await ProyectoModel.findOneAndDelete(query); 
            if (project) { return `ID ${ args._id } Eliminado !!`; }
            else { return `ID ${ args._id } No esta registrado en la DB !!`; }             
        },
        updateProject: async (parent, args) => {
            try {
                const query = { _id: args._id }; 
                const project = await ProyectoModel.findOne(query);
                if (project) {
                    const projectUpdate = await ProyectoModel.updateOne(query, args);
                    if (projectUpdate) { return `Proyecto ID ${args._id} Ha sido actualizado`; }
                }
            } catch (e) { return `El ID ${ args._id } No se encuentra Registrado`; }            
        },        
    },
};

export { resolversProject };