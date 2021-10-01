import { Injectable } from '@angular/core';
import { Paciente } from '../models/paciente';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private baseURL = "http://localhost:5000/api/paciente";

  constructor(private http: HttpClient) {}

  list(): Observable<Paciente[]> {
      return this.http.get<Paciente[]>(`${this.baseURL}/list`);
  }

  create(paciente: Paciente): Observable<Paciente> {
      return this.http.post<Paciente>(`${this.baseURL}/create`, paciente);
  }

  delete(id: number): Observable<Paciente> {
    return this.http.delete<Paciente>(`${this.baseURL}/delete/${id}`);
  }

  update(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.baseURL}/update`, paciente);
  }
} 