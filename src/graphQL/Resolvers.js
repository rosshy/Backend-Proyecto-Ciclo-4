import { resolversProject } from "../models/project/ResolversProject";
import { resolversUser } from "../models/users/ResolversUser";
import {resolversInscripciones} from '../models/inscripcion/Resolver.js';
import {resolversAvance} from '../models/avance/Resolvers.js';
import { resolversAutenticacion } from './auth/Resolvers.js';



export const resolvers = [ resolversProject, resolversUser, resolversInscripciones, resolversAvance, resolversAutenticacion ];