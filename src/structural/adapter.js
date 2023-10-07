"use strict";
class RoundHole {
    constructor(radius) {
        this._radius = radius;
    }
    fits(peg) {
        return this._radius >= peg.getRadius();
    }
}
class RoundPeg {
    constructor(radius) {
        this._radius = radius;
    }
    getRadius() {
        return this._radius;
    }
}
class SquarePeg {
    constructor(width) {
        this._width = width;
    }
    get width() {
        return this._width;
    }
}
class SquarePegAdapter extends RoundPeg {
    constructor(peg) {
        super(0);
        this.peg = peg;
    }
    getRadius() {
        console.log(`Radius: ${this.peg.width * Math.sqrt(2) / 2}`);
        return (this.peg.width * Math.sqrt(2) / 2);
    }
}
const hole = new RoundHole(5);
const pegR = new RoundPeg(5);
const pegS = new SquarePeg(3);
const pegSBig = new SquarePeg(10);
console.log(`Fits pegR in hole: ${hole.fits(pegR)}`);
const adapterPegS = new SquarePegAdapter(pegS);
console.log(`Fits pegS in hole: ${hole.fits(adapterPegS)}`);
const adapterPegSBig = new SquarePegAdapter(pegSBig);
console.log(`Fits pegSBig in hole: ${hole.fits(adapterPegSBig)}`);
