type ShippingType = 'ground' | 'air' | 'ship';

class Order {
    private lineItems: string;
    private shipping: Shipping;

    constructor(lineItems: string, shipping: Shipping) {
        this.lineItems = lineItems;
        this.shipping = shipping;
    }
    public getTotalWeight(): number {
        return 100;
    }
    public setShippingType(st: string) {}
    public getShippingCost() {
        return this.shipping.getCost() * 5;
    }
}

interface Shipping {
    getCost: () => number,
    getDate: () => string
}

class GroundShipping implements Shipping {
    public getCost() {
        // Formula
        return 0;
    };

    public getDate() {
        return "25/08/2023"
    }
}

class AirShipping implements Shipping {
    public getCost() {
        return 3;
    };

    public getDate() {
        return "28/08/2023"
    }
}

class ShipShipping implements Shipping {
    public getCost() {
        return 5;
    };

    public getDate() {
        return "30/08/2023"
    }
}

const delivery = new Order('items', new GroundShipping());
console.log(`Ground: ${delivery.getShippingCost()}`);

const delivery2 = new Order('items', new AirShipping());
console.log(`Air: ${delivery2.getShippingCost()}`);

const delivery3 = new Order('items', new ShipShipping());
console.log(`Ship: ${delivery3.getShippingCost()}`);
