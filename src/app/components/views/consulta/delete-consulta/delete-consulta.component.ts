import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Consulta } from 'src/app/models/consulta';
import { ConsultaService } from 'src/app/services/consulta.service';

@Component({
  selector: 'app-delete-consulta',
  templateUrl: './delete-consulta.component.html',
  styleUrls: ['./delete-consulta.component.css']
})
export class DeleteConsultaComponent implements OnInit {

  consultas: Consulta[] = [];
  
  constructor(private service: ConsultaService, private router: Router, private rota: ActivatedRoute) {}

  
  ngOnInit(): void {
    this.rota.params.subscribe((params) => {
      this.service.delete(params.id).subscribe();
      this.router.navigate(["consulta/listar"]);
    });
  }

}


