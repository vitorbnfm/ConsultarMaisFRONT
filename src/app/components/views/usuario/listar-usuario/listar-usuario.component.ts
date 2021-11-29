import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
    this.service.list().subscribe((usuario => {
      console.log(usuario);
      this.usuarios = usuario;
    }));
  }

}