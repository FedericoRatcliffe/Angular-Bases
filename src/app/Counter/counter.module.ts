import { NgModule } from "@angular/core";
import { CounterComponent } from "./Componentes/counter/counter.component";




//el array ''EXPORTS'' hace que se puedan usar los componentes fuera del scope del modulo donde se encuentra
@NgModule({
    declarations:[
        CounterComponent
    ],
    exports:[
        CounterComponent
    ]
})
export class CounterModule{

}




