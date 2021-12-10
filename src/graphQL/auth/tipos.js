import { gql } from 'apollo-server-express';

const tiposAutenticacion = gql`
  type Token {
    token: String
    error: String
  }
  type Mutation {
    registro(
      Identificacion: String!
      Nombre: String!
      Apellido: String!
      Email: String!
      Password: String
      Rol: Enum_Rol!
      Estado: Enum_Estado
    ): Token!
    login(Email: String!, Password: String!): Token
    refreshToken: Token
  }
`;

export { tiposAutenticacion };