import { gql } from "apollo-server-express"; 

const typeProject = gql `

    enum Estado_Proj { ACTIVO INACTIVO }
    enum Fase_Proj { INICIADO EN_DESARROLLO TERMINADO NULO }

    type Avance {
        CreadoPor: String
        Fecha_Inicio: Date
        Descripcion: String
        Observaciones: String
    }
    type Student {
        Id_Estud: String
        Nom_Estud: String
        Email: String
        Estado_Estud: String
    }
    input crearAvance {
        CreadoPor: String
        Fecha_Inicio: Date
        Descripcion: String
        Observaciones: String
    }
    input crearStudent {
        Id_Estud: String
        Nom_Estud: String
        Email: String
        Estado_Estud: String
    }
    type Proyecto {
        _id: ID!
        Nombre: String!
        Ob_Generales: String!
        Ob_Especificos: String!
        Presupuesto: Float!
        Fecha_Inicio: Date
        Fecha_Terminacion: Date
        Id_Lider: String!
        Avance: [Avance]
        Nom_Lider: String
        Estado: Estado_Proj
        Fase: Fase_Proj  
        Est_Inscritos: [Student]      
    }
    type Query {
        allProyectos: [Proyecto] 
        getOneProject( _id: ID! ) : Proyecto
    }
    type Mutation {
        addProject(
            Nombre: String!
            Ob_Generales: String!
            Ob_Especificos: String!
            Presupuesto: Float!
            Fecha_Inicio: Date
            Fecha_Terminacion: Date
            Id_Lider: String!
            Avance: [crearAvance]
            Nom_Lider: String
            Estado: Estado_Proj
            Fase: Fase_Proj  
            Est_Inscritos: [crearStudent]  
        ) : Proyecto

        deleteProject(
            _id: ID!
        ) : String

        updateProject(
            _id: ID!
            Nombre: String
            Ob_Generales: String
            Ob_Especificos: String
            Presupuesto: Float
            Fecha_Inicio: Date
            Fecha_Terminacion: Date
            Id_Lider: String
            Nom_Lider: String
            Avance: [crearAvance]
            Estado: Estado_Proj
            Fase: Fase_Proj  
            Est_Inscritos: [crearStudent]  
        ) : String
    }
`;

export { typeProject };