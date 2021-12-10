import { gql } from "apollo-server-core";

const typeUser = gql `

    enum Enum_Rol { ESTUDIANTE LIDER ADMINISTRADOR }
    enum Enum_Estado { PENDIENTE AUTORIZADO NO_AUTORIZADO }

    type User {
        _id: ID!
        Identificacion: String!
        Nombre: String!
        Apellido: String!
        Email: String!
        Password: String
        Rol: Enum_Rol!
        Estado: Enum_Estado
    }
    type Query {
        allUsers( Rol: Enum_Rol ): [User]
        getOneUser( _id: String! ) : User
    }
    type Mutation {
        addUser(
            Identificacion: String!
            Nombre: String!
            Apellido: String!
            Email: String!
            Password: String
            Rol: Enum_Rol!
            Estado: Enum_Estado
        ) : User

        updateUser(
            _id: String!
            Identificacion: String!
            Nombre: String
            Apellido: String
            Email: String
            Estado: Enum_Estado
        ) : User

        deleteUser(
            _id: String
            Identificacion: String!
        ) : User
    }
`;

export { typeUser };