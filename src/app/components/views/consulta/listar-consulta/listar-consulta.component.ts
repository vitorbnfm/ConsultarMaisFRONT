import { Component, OnInit } from "@angular/core";
import { ConsultaService } from "src/app/services/consulta.service";
import { Consulta } from "./../../../../models/consulta";


@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})



export class ListarConsultaComponent implements OnInit {
  consultas: Consulta[] = [];
  colunasExibidas: String[] = [
      "dataconsulta",
      "usuario",
      "medico",
  ];

  constructor(private service: ConsultaService) {}

  ngOnInit(): void {
      this.service.list().subscribe((consultas) => {
          this.consultas = consultas;
      });
  }
}