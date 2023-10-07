"use strict";
class Order {
    constructor(lineItems, shipping) {
        this.lineItems = lineItems;
        this.shipping = shipping;
    }
    getTotalWeight() {
        return 100;
    }
    setShippingType(st) { }
    getShippingCost() {
        return this.shipping.getCost() * 5;
    }
}
class GroundShipping {
    getCost() {
        // Formula
        return 0;
    }
    ;
    getDate() {
        return "25/08/2023";
    }
}
class AirShipping {
    getCost() {
        return 3;
    }
    ;
    getDate() {
        return "28/08/2023";
    }
}
class ShipShipping {
    getCost() {
        return 5;
    }
    ;
    getDate() {
        return "30/08/2023";
    }
}
const delivery = new Order('items', new GroundShipping());
console.log(`Ground: ${delivery.getShippingCost()}`);
const delivery2 = new Order('items', new AirShipping());
console.log(`Air: ${delivery2.getShippingCost()}`);
const delivery3 = new Order('items', new ShipShipping());
console.log(`Ship: ${delivery3.getShippingCost()}`);
