import { Component } from '@angular/core';

@Component({
  selector: 'app-pregunta01',
  templateUrl: './pregunta01.component.html',
  styleUrl: './pregunta01.component.css'
})
export class Pregunta01Component {
  horas: number = 0;
  minutos: number = 0;
  costo: number = 0;

  calcularCosto(): void {
    const totalMinutos = this.horas * 60 + this.minutos;
    const costoxHoras = 1500 / 60; 
    this.costo = costoxHoras * totalMinutos;
  }
}
