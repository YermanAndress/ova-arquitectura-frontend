import { Component } from '@angular/core';
import { Pregunta } from './pages/pregunta/pregunta';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [Pregunta]
})
export class App {}
