import { Component } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { OvaService } from '../../services/ova';

@Component({
  selector: 'app-pregunta',
  standalone: true,
  templateUrl: './pregunta.html',
  styleUrls: ['./pregunta.css'],
  imports: [NgIf, NgFor]
})
export class Pregunta {
  pregunta: any = null;

  resultado: {                  // <-- esto es importante
    resultado: boolean,
    mensaje: string
  } | null = null;

  constructor(private ovaService: OvaService) {}

  ngOnInit() {
    this.cargarPregunta();
  }

  cargarPregunta() {
    this.ovaService.obtenerPreguntas().subscribe(data => {
      this.pregunta = data;
    });
  }

  responder(opcionIndex: number) {
    this.ovaService.verificarRespuesta(this.pregunta.id, opcionIndex)
      .subscribe(res => {
        this.resultado = {
          resultado: res.correcto,
          mensaje: res.correcto ? 'Respuesta correcta' : 'Respuesta incorrecta'
        };
      });
  }
}
