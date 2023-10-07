"use strict";
class CreditCard {
    get titularName() {
        return this._titularName;
    }
    get cardNumber() {
        return this._cardNumber;
    }
    get dueDate() {
        return this._dueDate;
    }
    set dueDate(value) {
        this._dueDate = value;
    }
    get securityCode() {
        return this._securityCode;
    }
    set securityCode(value) {
        this._securityCode = value;
    }
    constructor(titularName, cardNumber, dueDate, securityCode) {
        this._titularName = titularName;
        this._cardNumber = cardNumber;
        this._dueDate = dueDate;
        this._securityCode = securityCode;
    }
    clone() {
        return new CreditCard(this._titularName, this._cardNumber, this._dueDate, this._securityCode);
    }
}
const creditCards = [];
const milagrosCardPrototype = new CreditCard('Milagros', '4546546456645', '', 352);
creditCards.push(milagrosCardPrototype);
console.log(`Milagros Card Prototype: ${milagrosCardPrototype.titularName} ${milagrosCardPrototype.cardNumber} ${milagrosCardPrototype.dueDate}`);
const milagrosCard = milagrosCardPrototype.clone();
milagrosCard.dueDate = "08/29";
console.log(`Milagros Card Prototype: ${milagrosCard.titularName} ${milagrosCard.cardNumber} ${milagrosCard.dueDate}`);
