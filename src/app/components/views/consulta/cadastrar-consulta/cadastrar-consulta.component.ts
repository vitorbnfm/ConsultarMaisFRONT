import { MedicoService } from './../../../../services/medico.service';

import { Usuario } from './../../../../models/usuario';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Medico } from 'src/app/models/medico';

@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.css']
})
export class CadastrarConsultaComponent implements OnInit {
  dataconsulta!: string;
  medico!: string;
  medicoId!: number;
  usuario!: string;
  usuarioId!: number;
  datanascimento!: string;
  arrayMedicos: Medico[] = [];


  constructor(private service: ConsultaService, private userService: UsuarioService, private medService: MedicoService, private router: Router) { }

  ngOnInit(): void {
    let usuario = this.userService.listbyid().subscribe((a) => {
      this.usuario = a.nome;
      this.usuarioId = a.id!;
    });

    let medicos = this.medService.list().subscribe((a) => {
      this.arrayMedicos = a;
      console.log(this.arrayMedicos);
    })
  };

  cadastrar(): void {
    
    let consulta: Consulta = {
      dataconsulta: this.dataconsulta,
      medicoId: this.medicoId,
      usuarioId: this.usuarioId,
      datanascimento: this.datanascimento,
    };


    this.service.create(consulta).subscribe((consulta) => {
      console.log(consulta);
      this.router.navigate(["consulta/listar"]);
    });

  }
}