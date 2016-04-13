 
var id = 99;

export class Hero {
    
    static newId(){
        return ++id;
    }
    
    constructor(hero?){
     
        if(hero != null){
            this.id = hero.id;
            this.nome = hero.nome;
            this.time = hero.time;
        } 
        
    }
     
    
    id: number;
    nome: string;
    time: string;
}
 