import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app.counter',
  template: `<h1>Hola contador</h1>
             <h3>Cantidad: {{counter}}</h3>
              <button (click)="actualizarCantidad(+1)">+</button>
              <button (click)="resetCantidad(+1)">Reset</button>
              <button (click)="actualizarCantidad(-1)">-</button>
              `

})

export class counterComponent {

  public counter: number = 1;

  public actualizarCantidad(value: number){
    this.counter += value;
  }

  public resetCantidad(resetValues : number) {
    this.counter = resetValues;

  }
}
