type Size = 'small' | 'medium' | 'big';
type Dough = 'thin' | 'thick';

class Pizza {
    size: Size;
    dough: Dough;
    hasPeperonni: boolean = false;
    hasOnnion: boolean = false;
    hasPickles: boolean = false;
    hasSauce: boolean = false;
    hasCorn: boolean = false;
    hasPinnaple: boolean = false;

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

    constructor(size: Size, dough: Dough) {
        this.size = size;
        this.dough = dough
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
    private pizza: Pizza;

    constructor(size: Size, dough: Dough) {
        this.pizza = new Pizza(size, dough);
    }

    setHasPeperonni(hasPeperonni: boolean) {
        this.pizza.hasPeperonni = hasPeperonni;
        return this;
    }

    setHasOnnion(hasOnnion: boolean) {
        this.pizza.hasOnnion = hasOnnion;
        return this;
    }

    setHasPickles(hasPickles: boolean) {
        this.pizza.hasPickles = hasPickles;
        return this;
    }

    setHasSauce(hasSauce: boolean) {
        this.pizza.hasSauce = hasSauce;
        return this;
    }

    setHasCorn(hasCorn: boolean) {
        this.pizza.hasCorn = hasCorn;
        return this;
    }

    setHasPinnaple(hasPinnaple: boolean) {
        this.pizza.hasPinnaple = hasPinnaple;
        return this;
    }

    build(): Pizza {
        return this.pizza;
    }

}


// const pizzaPeperonni = new Pizza('small', 'thin', true, false, false, true, false, false);

class Director {

    constructor() {}

    createPeperonniPizza(size: Size, dough: Dough): Pizza {
        const pizzaBuilder = new PizzaBuilder(size, dough);
        return pizzaBuilder.setHasPeperonni(true).setHasSauce(true).build();
    }

    createMargaritaPizza(size: Size, dough: Dough): Pizza {
        const pizzaBuilder = new PizzaBuilder(size, dough);
        return pizzaBuilder.setHasCorn(true).setHasSauce(true).build();
    }
}

const director = new Director();
const peperonniPizza = director.createPeperonniPizza('small', 'thin');
const margaritaPizza = director.createMargaritaPizza('big', 'thick');

peperonniPizza.displayPizza();
margaritaPizza.displayPizza();

