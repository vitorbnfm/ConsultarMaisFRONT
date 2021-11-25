<<<<<<< HEAD
import { Paciente } from './paciente';
=======
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm
import { Medico } from './medico';
export interface Consulta {
    id?: number;
    dataconsulta: string;
<<<<<<< HEAD
    medico?: Medico;
=======
    datanascimento: string;
    medico: Medico;
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm
    medicoId: number;
    paciente?: Paciente; 
    pacienteId: number;
    criadoem?: string;
}
