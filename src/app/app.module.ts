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
<<<<<<< HEAD
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemplateComponent } from './components/template/template.component';
import { TelaLoginComponent } from './components/views/tela-login/tela-login.component';
import { ADMComponent } from './components/views/ADM/adm.component';
// Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import { AtualizarMedicoComponent } from './components/views/medico/atualizar-medico/atualizar-medico.component';
import { DeletarMedicoComponent } from './components/views/medico/deletar-medico/deletar-medico.component';
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm

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
<<<<<<< HEAD
    ListarUsuarioComponent
=======
    ListarUsuarioComponent,
    TemplateComponent,
    TelaLoginComponent,
    ADMComponent,
    AtualizarMedicoComponent,
    DeletarMedicoComponent,
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    FormsModule
=======
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatTableModule,
    MatExpansionModule
>>>>>>> 7789dcc... Alterações no Médico e ADM Components. Feita requisição para deletar o médico e visual da página do adm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
