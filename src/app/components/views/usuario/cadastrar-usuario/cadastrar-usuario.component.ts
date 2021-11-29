import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  
  nome!: string;
  login!: string;
  senha!: string;


  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
      let usuario: Usuario = {
          
          nome: this.nome,
          login: this.login,
          senha: this.senha,
      };
      this.service.create(usuario).subscribe((usuario) => {
          console.log(usuario);
          this.router.navigate(["usuario/listar"]);
      });
  }
}