class Ninja {
    constructor(name,health,speed,strength){
        this.name=name;
        this.health=health;
        this.speed=speed || 3;
        this.strength=strength || 3;
    }
    sayName(){
        console.log(`Ninja ${this.name}`);
    }
    showStats(){
        console.log(`${this.name} has ${this.health} health, ${this.speed} speed, and ${this.strength} strength.`);
    }
    drinkSake(){
        this.health+=10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
