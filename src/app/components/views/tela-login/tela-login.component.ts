import { ListarConsultaComponent } from './../consulta/listar-consulta/listar-consulta.component';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {

    if (this.email.hasError('required')) {
      return "Campo obrigatório";
    }

    return this.email.hasError('email') ? 'Email inválido' : "";
  }

  getPassError() {

    return this.password.hasError('required') ? 'Campo obrigatório' : "";

  }

  id?: number;
  nome!: string;
  celular!: string;
  login!: string;
  senha!: string;
  tipo!: string;
  token!: string;

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token") != null) {
      localStorage.removeItem("token");
    }
  }

  logar(): void {
    let credenciais: Usuario = {
      id: this.id,
      nome: this.nome,
      celular: this.celular,
      login: this.login,
      senha: this.senha,
      tipo: this.tipo,
      token: this.token,
    }

    this.service.logar(credenciais).subscribe((credenciais) => {
      credenciais.senha = "";
      localStorage.setItem("token", JSON.stringify(credenciais.token));
      sessionStorage.setItem("userId", JSON.stringify(credenciais.id));

      credenciais.tipo == "ADM" ? this.router.navigate(["adm/inicio"]) : this.router.navigate(["consulta/listar"])
    })
  }
}
