import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';


@Component({
  selector: 'app-listar-consulta',
  templateUrl: './listar-consulta.component.html',
  styleUrls: ['./listar-consulta.component.css']
})
export class ListarConsultaComponent implements OnInit {
<<<<<<< HEAD
  consultas: Consulta[] = [];
  constructor(private service: ConsultaService) { }
=======
  consultas: any[] = [];
  colunasExibidas: String[] = ["Data da Consulta", "Médico"];
  constructor(private service: ConsultaService, private router: Router) { }
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm



  ngOnInit(): void {
    this.service.list().subscribe((consulta => {
<<<<<<< HEAD
      console.log(consulta);
=======
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm
      this.consultas = consulta;
    }));
  }

}