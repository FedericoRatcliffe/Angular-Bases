import { Component } from '@angular/core';




@Component({selector: 'app-heroes-hero',templateUrl: './hero.component.html',styleUrls: ['./hero.component.css']})
export class HeroComponent {

  public name:string = 'Volkswagen';
  public age:number = 45;

  //EL METODO APARECE COMO PROPIEDAD (SE PUEDE HACER INTERPOLACION)
  get capitalizedName():string{
    return this.name.toUpperCase();
  }


  
  //METODOS
  getHeroDescription():string{
    return `${this.name} / ${this.age}`;
  }

  changeHero():void{
    this.name = 'Lamborghini';
  }


  changeAge(){
    this.age = 25;
  }

  resetForm():void{
    this.name = 'Volkswagen';
    this.age = 45;
  }



}
