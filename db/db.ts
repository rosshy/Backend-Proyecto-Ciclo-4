import { connect } from 'mongoose';
// const { connect } = require('mongoose');

const conectarBD = async () => {
  return await connect(
    ' mongodb+srv://admin:admin1234@alphateam21.lt7uc.mongodb.net/alphateam21?retryWrites=true&w=majority'
  )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la bd', e);
    });
};

export default conectarBD;
