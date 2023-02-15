class Hunter{
    constructor(name,age,weightKg,heightM,strength,cageCubicMeters){
        this.name = name;
        this.age = age;
        this.weightKg = weightKg;
        this.heightM = heightM;
        this.strength = strength;
        this.cageCubicMeters = cageCubicMeters;
    }

    canCaptureAnimal(animal){
        if((this.strengthKg() >= animal.weightKg && this.cageCubicMeters >= animal.heightM) && !animal.predator){
            return true;
        }else{
            return false;
        }
    }

    attemptToDomesticate(animal){
        if(this.strengthKg() <= animal.weightKg * 2){
            return false;
        }
        animal.domesticate();
        return true;
    }

    strengthKg(){
        return this.weightKg * this.strength;
    }
}

function printHunter(hunter){
    console.log("The hunter's name is: " + hunter.name + ". This hunter can carry: " + hunter.strengthKg() + "kg and has a cage " + hunter.cageCubicMeters + " cubic meters wide");
}

class Animal{//Animalクラス
    constructor(species,weightKg,heightM,predator){
        this.species = species;
        this.weightKg = weightKg;
        this.heightM = heightM;
        this.predator = predator;
    }

    domesticate(){//predator属性(true)をfalseにする=peaceful animal属性になる
        this.predator = false;
    }
}

function printAnimal(animal){
    console.log("The animal species is: " + animal.species + ". It's weight is: " + animal.weightKg + "kg and its height is: " + animal.heightM + "m. " + ((animal.predator) ? "It is a predator!" : "It is a peaceful animal."))
}

//各Animal
let tiger1 = new Animal("Tiger", 290, 2.6, true);
let bear1 = new Animal("Bear", 250, 2.8, true);
let snake1 = new Animal("Snake", 250, 12.8, true);
let dog1 = new Animal("Dog", 90, 1.2, false);
let cat1 = new Animal("Cat", 40, 0.5, false);
let cow1 = new Animal("Cow", 1134, 1.5, false);

//各Hunter
let hunternator = new Hunter("Hunternator", 30, 124.73, 1.85, 15, 3);
let hunterChild = new Hunter("Hunter Child Of The Small Giants", 10, 50, 1.2, 0.6, 1);

printHunter(hunternator);
printAnimal(tiger1);

console.log("Can " + hunternator.name + " capture " + tiger1.species + "? The answer is..." + hunternator.canCaptureAnimal(tiger1));
console.log("Will " + hunternator.name + " be able to domesticate the " + tiger1.species + "?" + " The answer is..." + hunternator.attemptToDomesticate(tiger1));

printAnimal(tiger1);
console.log("Can " + hunternator.name + " capture " + tiger1.species + "? The answer is..." + hunternator.canCaptureAnimal(tiger1));