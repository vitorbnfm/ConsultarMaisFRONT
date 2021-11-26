import { DeletarMedicoComponent } from './components/views/medico/deletar-medico/deletar-medico.component';
import { AtualizarMedicoComponent } from './components/views/medico/atualizar-medico/atualizar-medico.component';
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
import { ADMComponent } from './components/views/ADM/adm.component';

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
  {
    path: "medico/atualizar",
    component: AtualizarMedicoComponent,
  },
  {
    path: "medico/deletar",
    component: DeletarMedicoComponent,
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
  // adm
  {
    path: "adm/inicio",
    component: ADMComponent,
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
