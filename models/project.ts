import {Schema, model, Schema} from 'mongoose';
import { Enum_EstadoProyecto,Enum_FaseProyecto } from './enums';


interface project{
    nombre:string,
    presupuesto:number,
    fechaInicio:Date,
    fechaFin:Date,
    estado:Enum_EstadoProyecto,
    fase:Enum_FaseProyecto,

}

const projectSchema=new Schema({

   
})