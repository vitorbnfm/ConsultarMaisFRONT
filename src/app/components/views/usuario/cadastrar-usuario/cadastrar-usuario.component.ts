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
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 7789dcc5ba023132334965559f52ded8013adccd
  tipo!: string;
  token!: string;
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm


  constructor(private service: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  cadastrar(): void {
<<<<<<< HEAD
      let usuario: Usuario = {
          
          nome: this.nome,
          login: this.login,
          senha: this.senha,
      };
      this.service.create(usuario).subscribe((usuario) => {
          console.log(usuario);
          this.router.navigate(["usuario/listar"]);
      });
=======
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

>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm
  }
}