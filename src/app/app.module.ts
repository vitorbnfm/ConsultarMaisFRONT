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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './components/template/template.component';
import { TelaLoginComponent } from './components/views/tela-login/tela-login.component';
// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    TemplateComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
