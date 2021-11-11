import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CadastrarPacienteComponent } from './components/views/paciente/cadastrar-paciente/cadastrar-paciente.component';
import { ListarPacienteComponent } from './components/views/paciente/listar-paciente/listar-paciente.component';
import { CadastrarMedicoComponent } from './components/views/medico/cadastrar-medico/cadastrar-medico.component';
import { ListarMedicoComponent } from './components/views/medico/listar-medico/listar-medico.component';
import { CadastrarConsultaComponent } from './components/views/consulta/cadastrar-consulta/cadastrar-consulta.component';
import { ListarConsultaComponent } from './components/views/consulta/listar-consulta/listar-consulta.component';
import { CadastrarUsuarioComponent } from './components/views/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './components/views/usuario/listar-usuario/listar-usuario.component';
import { DeleteConsultaComponent } from './components/views/consulta/delete-consulta/delete-consulta.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarPacienteComponent,
    ListarPacienteComponent,
    CadastrarMedicoComponent,
    ListarMedicoComponent,
    CadastrarConsultaComponent,
    ListarConsultaComponent,
    CadastrarUsuarioComponent,
    ListarUsuarioComponent,
    DeleteConsultaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
