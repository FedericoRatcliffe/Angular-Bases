import { Component } from '@angular/core';





@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {

  //PROPIEDADES
  public title: string = 'Autos';
  public counter: number = 10;

  //METODOS
  increaseBy(value:number):void{
    this.counter += value;
  }

  resetMethod():void{
    this.counter = 10;
  }

}
