import { resolversProject } from "../models/proyecto/ResolversProject";
import { resolversUser } from "../models/usuario/ResolversUser";
import {resolversInscripciones} from '../models/inscripcion/resolvers';
import {resolversAvance} from '../models/avance/avance';

export const resolvers = [ resolversProject, resolversUser, resolversInscripciones, resolversAvance ];