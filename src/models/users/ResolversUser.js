import UserModel from "./ModelUser";

const resolversUser = {
    Query: {
        allUsers: async (parent, args) => {
            if (args.Rol) {
                const users = await UserModel.find({ Rol: args.Rol });
                if (users.length == 0) { console.log("No hay Registros en la base de datos"); }
                else { return users; } 
            } else {
                const users = await UserModel.find();
                if (users.length == 0) { console.log("No hay Registros en la base de datos"); }
                else { return users; } 
            }            
        }, 
        getOneUser: async (parent, args) => {
            const query = { _id: args._id };
            const user = await UserModel.findOne(query);
            if (user) { return user; } 
            else { console.log(`EL ID ${ args._id } NO Existe`); }
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const query = { Identificacion: args.Identificacion };
            const userDB = await UserModel.find(query);    
            if (userDB.length == 0) {                    
                const userAdd = await UserModel.create(args); 
                return userAdd;
            } else { console.log(`EL Usuario ${ args.Identificacion } ya estaba registrado !!`); }                          
        }, 
        deleteUser: async (parent, args) => {
            const query = {  _id: args._id   };
            const user = await UserModel.findOneAndDelete(query); 
            if (user) { return ` El ID ${ args.Identificacion } fue Eliminado !!`; }
            else { return `El ID ${ args.Identificacion } No esta registrado en la DB !!`; }             
        },
        updateUser: async (parent, args) => {    
            const updateUser = await UserModel.findByIdAndUpdate(
                args._id,
                {
                  Nombre: args.Nombre,
                  Apellido: args.Apellido,
                  Identificacion: args.Identificacion,
                  Email: args.Email,
                  Estado: args.Estado,
                },
                { new: true }
              );
        
              return updateUser;
        },
    }
}

export { resolversUser };