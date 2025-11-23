import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OvaService {
  private apiUrl = 'http://localhost:8080/api/ova';

  constructor(private http: HttpClient) {}

  obtenerPreguntas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pregunta`).pipe(
      catchError(this.handleError)
    );
  }

  verificarRespuesta(idPregunta: number, opcion: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/validar`, {
      idPregunta,
      opcion
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';
    
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}