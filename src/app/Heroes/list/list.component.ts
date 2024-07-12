import { Component } from '@angular/core';



@Component({selector: 'app-heroes-list',templateUrl: './list.component.html',styleUrls: ['./list.component.css']})
export class ListComponent {
    
    public autoNames: string[] = ['Volkswagen','Bugatti','Lamborghini','Ferrari','Audi','BMW','Mercedes'];
    public autoBorrado?: string;



    removeLastAuto():void {
        this.autoBorrado = this.autoNames.pop();
    }

}
