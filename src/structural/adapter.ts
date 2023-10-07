class RoundHole {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    public fits(peg: RoundPeg): boolean {
        return this._radius >= peg.getRadius();
    }
}

class RoundPeg {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    getRadius() {
        return this._radius;
    }
}

class SquarePeg {
    private _width: number;

    constructor(width: number) {
        this._width = width;
    }

    get width() {
        return this._width;
    }
}

class SquarePegAdapter extends RoundPeg {
    private peg: SquarePeg;

    constructor(peg: SquarePeg) {
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
