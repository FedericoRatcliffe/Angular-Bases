import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';





@Injectable({
    providedIn: 'root'
})
export class DbzService {

    
    public characters: Character[] = [{
        id: uuid(),
        name: 'Gok',
        power: 6
    },
    {
        id: uuid(),
        name: 'Batman',
        power: 3
    },
    {
        id: uuid(),
        name: 'Ironman',
        power: 4
    }];


    onNewCharacter(character: Character): void {


        const newCharacter: Character = { id: uuid(), ...character }


        this.characters.push(newCharacter);
    }


    onDeleteCharacter(index: number) {
        this.characters.splice(index, 1);
    }

}