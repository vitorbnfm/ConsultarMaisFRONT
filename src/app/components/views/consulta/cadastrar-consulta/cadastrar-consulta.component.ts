import { MedicoService } from './../../../../services/medico.service';
import { PacienteService } from './../../../../services/paciente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.css']
})
export class CadastrarConsultaComponent implements OnInit {
  dataconsulta!: string;
  medico!: string;
  paciente!: string;

  constructor(private consultaService: ConsultaService, pacienteService: PacienteService, medicoService: MedicoService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
      let consulta: Consulta = {
        dataconsulta: this.dataconsulta,
        medico: this.medico,
        paciente: this.paciente,

      };
      this.consultaService.create(consulta).subscribe((consulta) => {
          console.log(consulta);
          this.router.navigate(["consulta/listar"]);
      });
  }
}