import { Medico } from './../../../../models/medico';
import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-listar-medico',
  templateUrl: './listar-medico.component.html',
  styleUrls: ['./listar-medico.component.css']
})
export class ListarMedicoComponent implements OnInit {
  medicos: Medico[] = [];
  constructor(private service: MedicoService) { }

  ngOnInit(): void {
    this.service.list().subscribe((medico => {
      console.log(medico);
      this.medicos = medico;
    }));
  }

}