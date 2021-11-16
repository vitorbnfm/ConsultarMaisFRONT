import { TelaLoginComponent } from './components/views/tela-login/tela-login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarConsultaComponent } from './components/views/consulta/cadastrar-consulta/cadastrar-consulta.component';
import { ListarConsultaComponent } from './components/views/consulta/listar-consulta/listar-consulta.component';
import { CadastrarMedicoComponent } from './components/views/medico/cadastrar-medico/cadastrar-medico.component';
import { ListarMedicoComponent } from './components/views/medico/listar-medico/listar-medico.component';
import { CadastrarPacienteComponent } from './components/views/paciente/cadastrar-paciente/cadastrar-paciente.component';
import { ListarPacienteComponent } from './components/views/paciente/listar-paciente/listar-paciente.component';
import { CadastrarUsuarioComponent } from './components/views/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './components/views/usuario/listar-usuario/listar-usuario.component';

const routes: Routes = [
  {
      path: "",
      component: TelaLoginComponent,
  },
  //paciente
  {
      path: "paciente/listar",
      component: ListarPacienteComponent,
  },
  {
      path: "paciente/cadastrar",
      component: CadastrarPacienteComponent,
  },

  //medico
  {
    path: "medico/listar",
    component: ListarMedicoComponent,
  },
  {
    path: "medico/cadastrar",
    component: CadastrarMedicoComponent,
  },
  //consulta
  {
    path: "consulta/listar",
    component: ListarConsultaComponent,
  },
  {
    path: "consulta/cadastrar",
    component: CadastrarConsultaComponent,
  },
  //usuario
  {
    path: "usuario/listar",
    component: ListarUsuarioComponent,
  },
  {
    path: "usuario/cadastrar",
    component: CadastrarUsuarioComponent,
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
