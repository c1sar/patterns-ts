"use strict";
class Pizza {
    // constructor(size: Size, dough: Dough, hasPeperonni: boolean, hasOnnion: boolean, 
    //     hasPickles: boolean, hasSauce: boolean, hasCorn: boolean, hasPinnaple: boolean) {
    //     this.size = size;
    //     this.dough = dough;
    //     this.hasPeperonni = hasPeperonni;
    //     this.hasOnnion = hasOnnion;
    //     this.hasPickles = hasPickles;
    //     this.hasSauce = hasSauce;
    //     this.hasCorn = hasCorn;
    //     this.hasPinnaple = hasPinnaple;
    // }
    constructor(size, dough) {
        this.hasPeperonni = false;
        this.hasOnnion = false;
        this.hasPickles = false;
        this.hasSauce = false;
        this.hasCorn = false;
        this.hasPinnaple = false;
        this.size = size;
        this.dough = dough;
    }
    displayPizza() {
        console.log(`Size: ${this.size}`);
        console.log(`dough: ${this.dough}`);
        console.log(`hasPeperonni: ${this.hasPeperonni}`);
        console.log(`hasOnnion: ${this.hasOnnion}`);
        console.log(`hasPickles: ${this.hasPickles}`);
        console.log(`hasSauce: ${this.hasSauce}`);
        console.log(`hasCorn: ${this.hasCorn}`);
        console.log(`hasPinnaple: ${this.hasPinnaple}`);
    }
}
class PizzaBuilder {
    constructor(size, dough) {
        this.pizza = new Pizza(size, dough);
    }
    setHasPeperonni(hasPeperonni) {
        this.pizza.hasPeperonni = hasPeperonni;
        return this;
    }
    setHasOnnion(hasOnnion) {
        this.pizza.hasOnnion = hasOnnion;
        return this;
    }
    setHasPickles(hasPickles) {
        this.pizza.hasPickles = hasPickles;
        return this;
    }
    setHasSauce(hasSauce) {
        this.pizza.hasSauce = hasSauce;
        return this;
    }
    setHasCorn(hasCorn) {
        this.pizza.hasCorn = hasCorn;
        return this;
    }
    setHasPinnaple(hasPinnaple) {
        this.pizza.hasPinnaple = hasPinnaple;
        return this;
    }
    build() {
        return this.pizza;
    }
}
// const pizzaPeperonni = new Pizza('small', 'thin', true, false, false, true, false, false);
class Director {
    constructor() { }
    createPeperonniPizza(size, dough) {
        const pizzaBuilder = new PizzaBuilder(size, dough);
        return pizzaBuilder.setHasPeperonni(true).setHasSauce(true).build();
    }
    createMargaritaPizza(size, dough) {
        const pizzaBuilder = new PizzaBuilder(size, dough);
        return pizzaBuilder.setHasCorn(true).setHasSauce(true).build();
    }
}
const director = new Director();
const peperonniPizza = director.createPeperonniPizza('small', 'thin');
const margaritaPizza = director.createMargaritaPizza('big', 'thick');
peperonniPizza.displayPizza();
margaritaPizza.displayPizza();
