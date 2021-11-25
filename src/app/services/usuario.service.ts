import { Usuario } from './../models/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = "http://localhost:5000/api/usuario";

  constructor(private http: HttpClient) {}

  list(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(`${this.baseURL}/list`);
  }

  create(usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(`${this.baseURL}/create`, usuario);
  }
}
