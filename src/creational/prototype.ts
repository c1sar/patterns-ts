
interface Prototype<T> {
    clone: () => T;
}

class CreditCard implements Prototype<CreditCard> {
    private _titularName: string;
    public get titularName(): string {
        return this._titularName;
    }

    private _cardNumber: string;
    public get cardNumber(): string {
        return this._cardNumber;
    }

    private _dueDate: string;
    public get dueDate(): string {
        return this._dueDate;
    }
    public set dueDate(value: string) {
        this._dueDate = value;
    }

    private _securityCode: number;
    public get securityCode(): number {
        return this._securityCode;
    }
    public set securityCode(value: number) {
        this._securityCode = value;
    }

    constructor(titularName: string, cardNumber: string, dueDate: string, securityCode: number) {
        this._titularName = titularName;
        this._cardNumber = cardNumber;
        this._dueDate = dueDate;
        this._securityCode = securityCode;
    }


    public clone(): CreditCard {
        return new CreditCard(this._titularName, this._cardNumber, this._dueDate, this._securityCode);
    }
}


const creditCards: CreditCard[] = []
const milagrosCardPrototype = new CreditCard('Milagros', '4546546456645', '', 352);
creditCards.push(milagrosCardPrototype);

console.log(`Milagros Card Prototype: ${milagrosCardPrototype.titularName} ${milagrosCardPrototype.cardNumber} ${milagrosCardPrototype.dueDate}`);

const milagrosCard = milagrosCardPrototype.clone();
milagrosCard.dueDate = "08/29"

console.log(`Milagros Card Prototype: ${milagrosCard.titularName} ${milagrosCard.cardNumber} ${milagrosCard.dueDate}`);