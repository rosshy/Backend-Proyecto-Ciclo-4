import { gql } from 'apollo-server-express';

const tiposAvance = gql`
  type Avance {
    _id: ID!
    fecha: Date!
    descripcion: String!
    observaciones: [String]
    proyecto: Proyecto!
    creadoPor: Usuario!
  }
  type Query {
    allAvances: [Avance]
    Avances: [Avance]
    filtrarAvance(_id: String!): [Avance]
  }
  type Mutation {
    crearAvance(fecha: Date!, descripcion: String!, proyecto: String!, creadoPor: String!): Avance
  }
`;

export { tiposAvance };