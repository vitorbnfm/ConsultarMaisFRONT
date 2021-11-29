import { Usuario } from './usuario';
import { Medico } from './medico';
export interface Consulta {
    id?: number;
    dataconsulta: string;
    medico?: Medico;
    medicoId: number;
    usuario?: Usuario; 
    usuarioId: number;
    criadoem?: string;
}
