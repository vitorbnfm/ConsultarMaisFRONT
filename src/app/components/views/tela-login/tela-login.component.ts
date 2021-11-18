import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  nome!: string;
  login!: string;
  senha!: string;

  constructor(private service: UsuarioService) { }

  ngOnInit(): void {
  }

  logar() : void {
    let credenciais: Usuario = {
      nome: this.nome,
      login: this.login,
      senha: this.senha,
    }
    
    this.service.logar(credenciais).subscribe((credenciais) => {
      console.log(credenciais);
    })
  }

}
