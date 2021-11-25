import { Paciente } from './paciente';
import { Medico } from './medico';
export interface Consulta {
    id?: number;
    dataconsulta: string;
    medico?: Medico;
    medicoId: number;
    paciente?: Paciente; 
    pacienteId: number;
    criadoem?: string;
}
