import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from './../../../../services/medico.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-cadastrar-consulta',
  templateUrl: './cadastrar-consulta.component.html',
  styleUrls: ['./cadastrar-consulta.component.css']
})
export class CadastrarConsultaComponent implements OnInit {
  dataconsulta!: string;
  medicos!: Medico[];
  medicoId!: number;
  usuario!: string;
  usuarioId!: number;

  constructor(
      private consultaService: ConsultaService,
      private medicoService: MedicoService,
      private usuarioService: UsuarioService,
      private router: Router      
  ) {}

  ngOnInit(): void {
      this.medicoService.list().subscribe((medicos) => {
          this.medicos = medicos;
          console.table(medicos);
      });

      this.usuarioService.listbyid().subscribe(usuario => {
        this.usuario = usuario.nome;
      })
  }
  

  agendar(): void {
    let consulta: any = {
      dataconsulta: this.dataconsulta,
      medicoId: this.medicoId,
      usuarioId: sessionStorage.getItem("userId"),
      
    };
      this.consultaService.create(consulta).subscribe((consulta) => {
          console.log(consulta);
          this.router.navigate(["consulta/listar"]);
      });

  }

}