class Card {
    constructor(name,cost){
        this.name = name;
        this.cost = cost;
    }
}
class Unit extends Card{
    constructor(name,cost,power,res){
        super(name,cost);
        this.power=power;
        this.res=res;
    }
    attack(target){
        if (target instanceof Unit){
            target.res -= this.power;
        }
        else {
            throw new Error('Target must be a unit!');

        }
    }
}
class Effect extends Card{
    constructor(name,cost,text,stat,magnitud){
        super(name,cost);
        this.text=text;
        this.stat=stat;
        this.magnitud=magnitud;
    }
    play(target){
        if (target instanceof Unit){
            if(this.stat === 'resilience'){
                target.res+=this.magnitud;
                console.log(this.text);
            }else if(this.stat==='power'){
                target.power += this.magnitud;
                console.log(this.text);
            }else {
                console.log(`Invalid STAT ${this.stat}`);
            }
        }
        else {
            throw new Error('Target must be a unit!');

        }
    }
}
const red =new Unit('Red Belt ninja',3,3,4);
const black =new Unit('Black belt ninja',4,5,4);

const hard_algo =new Effect('Hard Algorithm',2,'increase target\'s resilience by 3')