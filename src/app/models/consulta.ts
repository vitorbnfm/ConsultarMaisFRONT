<<<<<<< HEAD
<<<<<<< HEAD
import { Paciente } from './paciente';
=======
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm
=======
>>>>>>> 7789dcc5ba023132334965559f52ded8013adccd
import { Medico } from './medico';
export interface Consulta {
    id?: number;
    dataconsulta: string;
<<<<<<< HEAD
    medico?: Medico;
=======
    datanascimento: string;
    medico: Medico;
<<<<<<< HEAD
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm
=======
>>>>>>> 7789dcc5ba023132334965559f52ded8013adccd
    medicoId: number;
    paciente?: Paciente; 
    pacienteId: number;
    criadoem?: string;
}
