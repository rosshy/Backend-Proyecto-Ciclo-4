import { gql } from "apollo-server-core";
import { typeProject } from "../models/proyecto/TypesProject";
import { typeUser } from "../models/usuario/TypesUser";
import { tiposInscripcion } from '../models/inscripcion/tipos';
import { tiposEnums } from '../models/enums/tipos.js';
import { tiposAvance } from '../models/avance/tipos.js';

const allTypes = gql`
    scalar Date
`;

export const typesDefs = [ allTypes, typeProject, typeUser, tiposInscripcion, tiposEnums, tiposAvance ];