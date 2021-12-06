import { resolversProject } from "../models/proyecto/ResolversProject";
import { resolversUser } from "../models/usuario/ResolversUser";
import {resolverInscripciones} from '../models/inscripcion/resolvers';
import {resolversAvance} from '../models/avance/resolvers';

export const resolvers = [ resolversProject, resolversUser, resolverInscripciones, resolversAvance ];