import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent implements OnInit {
  consultas: any[] = [];
  constructor(private service: ConsultaService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe((consulta => {
      this.consultas = consulta;
      console.log(consulta);
    }));
  }
}