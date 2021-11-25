import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent implements OnInit {
  consultas: Consulta[] = [];
  constructor(private service: ConsultaService) { }

  ngOnInit(): void {
    this.service.list().subscribe((consulta => {
      console.log(consulta);
      this.consultas = consulta;
    }));
  }

}