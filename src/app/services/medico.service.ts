import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private baseURL = "http://localhost:5000/api/medico";

  constructor(private http: HttpClient) {}

  list(): Observable<Medico[]> {
      return this.http.get<Medico[]>(`${this.baseURL}/list`);
  }

  create(medico: Medico): Observable<Medico> {
      return this.http.post<Medico>(`${this.baseURL}/create`, medico);
  }
  delete(id: number): Observable<Medico> {
    let cab = {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token")!)}`
    };
    return this.http.delete<Medico>(`${this.baseURL}/delete/${id}`, {
      headers: cab,
    });
  }

  update(medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.baseURL}/update`, medico);
  }
} 