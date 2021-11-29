import { Paciente } from './../../../../models/paciente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-cadastrar-paciente',
  templateUrl: './cadastrar-paciente.component.html',
  styleUrls: ['./cadastrar-paciente.component.css']
})
export class CadastrarPacienteComponent implements OnInit {
  nome!: string;
  datanascimento!: string;
  endereco!: string;
  celular!: string;
  email!: string;

  constructor(private service: PacienteService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
      let paciente: Paciente = {
          nome: this.nome,
          datanascimento: this.datanascimento,
          endereco: this.endereco,
          celular: this.celular,
          email: this.email,

      };
      this.service.create(paciente).subscribe((paciente) => {
          console.log(paciente);
          this.router.navigate(["paciente/listar"]);
      });
  }
}