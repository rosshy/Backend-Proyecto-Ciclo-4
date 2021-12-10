import UserModel from '../../models/users/ModelUser.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';

const resolversAutenticacion = {
  Mutation: {
    registro: async (parent, args) => {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(args.Password, salt);
      const usuarioCreado = await UserModel.create({
        Nombre: args.Nombre,
        Apellido: args.Apellido,
        Identificacion: args.Identificacion,
        Email: args.Email,
        Password: hashedPassword,
        Rol: args.Rol,
      });
      console.log('usuario creado', usuarioCreado);
      return {
        token: generateToken({
          _id: usuarioCreado._id,
          Nombre: usuarioCreado.Nombre,
          Apellido: usuarioCreado.Apellido,
          Identificacion: usuarioCreado.Identificacion,
          Email: usuarioCreado.Email,
          Rol: usuarioCreado.Rol,
        }),
      };
    },

    login: async (parent, args) => {
      const usuarioEcontrado = await UserModel.findOne({ Email: args.Email });
      if (await bcrypt.compare(args.Password, usuarioEcontrado.Password)) {
        return {
          token: generateToken({
            _id: usuarioEcontrado._id,
            Nombre: usuarioEcontrado.Nombre,
            Apellido: usuarioEcontrado.Apellido,
            Identificacion: usuarioEcontrado.Identificacion,
            Email: usuarioEcontrado.Email,
            Rol: usuarioEcontrado.Rol,
          }),
        };
      }
    },

    refreshToken: async (parent, args, context) => {
      console.log('contexto', context);
      if (!context.userData) {
        return {
          error: 'token no valido',
        };
      } else {
        return {
          token: generateToken({
            _id: context.userData._id,
            Nombre: context.userData.Nombre,
            Apellido: context.userData.Apellido,
            Identificacion: context.userData.Identificacion,
            Email: context.userData.Email,
            Rol: context.userData.Rol,
          }),
        };
      }
      // valdiar que el contexto tenga info del usuario. si si, refrescar el token
      // si no devolver null para que en el front redirija al login.
    },
  },
};

export { resolversAutenticacion };