import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  num_A: number;
  num_B: number;

  @Output() resultadoSuma = new EventEmitter<number>();

  sumar():void{
    let resultado = this.num_A + this.num_B;
    this.resultadoSuma.emit(resultado);
  }

}
