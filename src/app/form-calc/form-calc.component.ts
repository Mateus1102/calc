import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css'
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  sum: number = 0;
  minus: number = 0;
  division: number = 0;
  multiply: number = 0;
  poten: number = 0;
  remnant: number = 0;


  onClickSum(){
    this.sum = this.num1 + this.num2;
  }
  onClickMinus(){
    this.minus = this.num1 - this.num2;
  }
  onClickDivision(){
    this.division = this.num1 / this.num2;
  }
  onClickMultiply(){
    this.multiply = this.num1 * this.num2;
  }
  onClickPoten(){
    this.poten = this.num1 ** this.num2;
  }
  onClickRemnant(){
    this.remnant = this.num1 % this.num2;
  }
}
