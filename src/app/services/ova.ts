import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OvaService {

  private apiUrl = 'http://localhost:8080/api/ova'; // <-- tu backend

  constructor(private http: HttpClient) {}

  obtenerPreguntas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pregunta`);
  }

  verificarRespuesta(idPregunta: number, opcion: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/validar`, {
      idPregunta,
      opcion
    });
  }
}
