import {Injectable} from 'angular2/core';
import {Hero} from '../models/hero';

@Injectable()
export class HeroService {
    
    getHeroes(){
        
        var heroes = [
            { id: 1,  nome: "Batman", time: "dc" },
            { id: 2,  nome: "Capitão America", time: "marvel" },
            { id: 3,  nome: "Superman", time: "dc" },
            { id: 4,  nome: "Iron Man", time: "marvel" },
            { id: 5,  nome: "QuickSilver", time: "marvel" },
            { id: 6,  nome: "Wonder Woman", time: "dc" },
            { id: 7,  nome: "Flash", time: "dc" }
        ];
        
        return Promise.resolve(heroes);
        
    }
    
    
}