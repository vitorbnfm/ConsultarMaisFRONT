import { Usuario } from './../../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(8)]);

  getErrorMessage() {

    if (this.email.hasError('required')) {
      return "Campo obrigatório";
    }

    return this.email.hasError('email') ? 'Email inválido' : "";
  }

  getPassError() {
     if (this.password.hasError('required')) {
       return "Campo obrigatório";
     }

     return this.password.hasError('minlength') ? 'A senha deve conter, no mínimo, 8 caracteres' : "";
  }

   nome!: string;
   celular!: string;
   login!: string;
   senha!: string;
   tipo!: string;
   token!: string;

   constructor(private service: UsuarioService, private router: Router) { }

   ngOnInit(): void { }

   cadastrar(): void {
     let legenda = document.getElementById("captionCadastro");
     let usuario: Usuario = {

      nome: this.nome,
      celular: this.celular,
      login: this.login,
      senha: this.senha,
      tipo: "User",
      token: this.token,
    };

    this.service.create(usuario).subscribe((usuario) => {
       legenda!.innerHTML = "<span>Usuário cadastrado com sucesso! <br> Você será redirecionado para a tela de login...</span>";
       legenda?.classList.add("success");


    setInterval(() => {
        this.router.navigate([""]);
      }, 4000)

    }, err => {
       console.log(legenda!.innerHTML = `<span> ${err.error} </span>`);
       legenda?.classList.add("error");
    });
  }
}
