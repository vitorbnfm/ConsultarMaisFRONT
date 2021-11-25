import { Medico } from './medico';
export interface Consulta {
    id?: number;
    dataconsulta: string;
    datanascimento: string;
    medico: Medico;
    medicoId: number;
    usuarioId: number;
    criadoem?: string;
}
