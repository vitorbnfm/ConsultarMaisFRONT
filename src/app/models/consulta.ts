import { Paciente } from './paciente';
import { Medico } from './medico';
export interface Consulta {
    id?: number;
    dataconsulta: string;

    datanascimento: string;
    medicoId: number;

    criadoem?: string;
}
