import { Component } from '@angular/core';
import { OvaService } from '../../services/ova';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  templateUrl: './pregunta.html',
  styleUrls: ['./pregunta.css']
})
export class Pregunta {
  pregunta: any = null;
  resultado: {
    resultado: boolean,
    mensaje: string
  } | null = null;
  
  cargando = false;
  error: string | null = null;

  constructor(private ovaService: OvaService) {}

  ngOnInit() {
    this.cargarPregunta();
  }

  cargarPregunta() {
    this.cargando = true;
    this.error = null;
    
    this.ovaService.obtenerPreguntas().subscribe({
      next: (data) => {
        this.pregunta = data;
        this.cargando = false;
      },
      error: (err) => {
        this.error = 'No se pudo cargar la pregunta. Verifica que el backend esté ejecutándose.';
        this.cargando = false;
        console.error('Error al cargar pregunta:', err);
      }
    });
  }

  responder(opcionIndex: number) {
    if (!this.pregunta) return;
    
    this.cargando = true;
    this.ovaService.verificarRespuesta(this.pregunta.id, opcionIndex)
      .subscribe({
        next: (res) => {
          this.resultado = {
            resultado: res.correcto,
            mensaje: res.correcto ? '¡Correcto! ✓' : 'Incorrecto ✗'
          };
          this.cargando = false;
        },
        error: (err) => {
          this.error = 'Error al verificar la respuesta';
          this.cargando = false;
          console.error('Error al verificar:', err);
        }
      });
  }

  reintentar() {
    this.resultado = null;
    this.error = null;
    this.cargarPregunta();
  }
}