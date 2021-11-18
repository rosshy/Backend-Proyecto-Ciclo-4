import { connect } from 'mongoose';
// const { connect } = require('mongoose');

const conectarBD = async () => {
  return await connect(
    'mongodb+srv://admin:Admin123@jose.hphxh.mongodb.net/jose?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;
