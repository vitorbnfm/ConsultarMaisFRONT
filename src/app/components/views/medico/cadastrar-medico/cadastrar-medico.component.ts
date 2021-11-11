import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cadastrar-medico',
  templateUrl: './cadastrar-medico.component.html',
  styleUrls: ['./cadastrar-medico.component.css']
})
export class CadastrarMedicoComponent implements OnInit {
  crm!: number;
  nome!: string;
  especialidade!: string;


  constructor(private service: MedicoService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
      let medico: Medico = {
          crm: this.crm,
          nome: this.nome,
          especialidade: this.especialidade,
      };
      this.service.create(medico).subscribe((medico) => {
          console.log(medico);
          this.router.navigate(["medico/listar"]);
      });
  }
}