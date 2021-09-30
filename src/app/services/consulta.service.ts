import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Consulta } from '../models/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {
  private baseURL = "http://localhost:5000/api/paciente";

  constructor(private http: HttpClient) {}

  list(): Observable<Consulta[]> {
      return this.http.get<Consulta[]>(`${this.baseURL}/list`);
  }

  create(consulta: Consulta): Observable<Consulta> {
      return this.http.post<Consulta>(`${this.baseURL}/create`, consulta);
  }

  delete(id: number): Observable<Consulta> {
    return this.http.delete<Consulta>(`${this.baseURL}/delete/${id}`);
  }

  update(consulta: Consulta): Observable<Consulta> {
    return this.http.put<Consulta>(`${this.baseURL}/update`, consulta);
  }
} 