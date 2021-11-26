import { MedicoService } from './../../../../services/medico.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletar-medico',
  templateUrl: './deletar-medico.component.html',
  styleUrls: ['./deletar-medico.component.css']
})
export class DeletarMedicoComponent implements OnInit {
  medicos: any[] = [];
  colunasExibidas: String[] = ["ID", "CRM", "Nome", "Especialidade", "Ação"];

  constructor(private medicoService: MedicoService) { }

  ngOnInit(): void {
    this.medicoService.list().subscribe((medicos) => {
      this.medicos = medicos;
      console.log(medicos);
    })
  }

  deletar(id: number): void {
    this.medicoService.delete(id).subscribe((res) => {
      alert("Médico deletado");
      location.reload();
    })
  }



}
