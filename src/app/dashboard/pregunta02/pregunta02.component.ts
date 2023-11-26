import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta02',
  templateUrl: './pregunta02.component.html',
  styleUrl: './pregunta02.component.css'
})
export class Pregunta02Component {
  nota1: number = 0;
  nota2: number = 0;
  nota3: number = 0;
  nota4: number = 0;
  promedio: number = 0;

  calcularPromedio(): void {
    const notas = [this.nota1, this.nota2, this.nota3, this.nota4];

    const notaMenor = Math.min(...notas);
    const remover = notas.indexOf(notaMenor);
    notas.splice(remover, 1);

    this.promedio = notas[0] * 0.2 + notas[1] * 0.3 + notas[2] * 0.5;
  }
}
