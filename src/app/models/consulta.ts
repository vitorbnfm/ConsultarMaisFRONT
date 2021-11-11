import { Medico } from './medico';
import { Paciente } from './paciente';


export interface Consulta {
    id?: number;
    dataconsulta: string;
    medico: string;
    paciente: string;
    criadoem?: string;
}
