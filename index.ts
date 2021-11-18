import conectarBD from './db/db';
import {UserModel} from './models/user';
import {Enum_Rol} from './models/enums';

const main = async () => {
  await conectarBD();

 // Crear un usuario
  await UserModel.create({
  nombre:'Jose',
  apellido:'Lopez',
  correo:'jose@a.com',
  identificacion:'1032',
  rol:Enum_Rol.administrador,
  

  }).then((u)=>{
  console.log('Usuario creado exitosamente:',u);

}).catch((e)=>{
  console.log('Error creando el usuario',e);
}); 

// Obtener los Usuarios
// await UserModel.find()
// .then((u)=>{
//   console.log('usuarios',u);
// })
// .catch((e) => {
//   console.log('Error obteniendo los usuarios',e);
//   });
 

//EDITAR UN USUARIOS

}


main();