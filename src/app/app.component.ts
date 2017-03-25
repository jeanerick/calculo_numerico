import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private val1: number;
  private val2: number;

  private result: number;

  private ma:Mantissa={"base":10,"tamanho":4,"minExp":5,"maxExp":5};
  constructor() {

  }


  public calcular(operation) {
    switch (operation) {
      case "soma":
        this.soma(this.val1, this.val2);
        break;
      case "div":
        this.divisao(this.val1, this.val2);
        break;

      case "mult":
        this.multiplicao(this.val1, this.val2);
        break;

      case "dif":
        this.diferenca(this.val1, this.val2);
        break;

      default:
        break;
    }
  }


  public normalize(value) {
    Math.pow(4, 3);
  }

  public soma(a:number, b:number) {
    this.result =Number(a)  + Number(b);
  }

  public divisao(a:number, b:number) {
    this.result = Number(a) / Number(b);
  }

  public multiplicao(a:number, b:number) {
    this.result = Number(a) * Number(b);
  }

  public diferenca(a:number, b:number) {
    this.result = Number(a)  - Number(b) ;
  }

}

interface Mantissa{
  base:number;
  tamanho:number;
  minExp:number;
  maxExp:number;
}
