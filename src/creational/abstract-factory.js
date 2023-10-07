"use strict";
// Button
class WinButton {
    paint() {
        console.log('Painting Windows Button');
    }
}
class MacButton {
    paint() {
        console.log('Painting Mac Button');
    }
}
class WinCheckbox {
    paint() {
        console.log('Painting Windows Checkbox');
    }
}
class MacCheckbox {
    paint() {
        console.log('Painting Mac Checkbox');
    }
}
class WinFactory {
    createButton() {
        return new WinButton();
    }
    createCheckbox() {
        return new WinCheckbox();
    }
}
class MacFactory {
    createButton() {
        return new MacButton();
    }
    createCheckbox() {
        return new MacCheckbox();
    }
}
class Application {
    constructor(factory) {
        this.factory = factory;
    }
    createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }
    paint() {
        var _a, _b;
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.paint();
        (_b = this.checkbox) === null || _b === void 0 ? void 0 : _b.paint();
    }
}
var OS;
(function (OS) {
    OS[OS["Windows"] = 0] = "Windows";
    OS[OS["Mac"] = 1] = "Mac";
})(OS || (OS = {}));
const system = OS.Mac;
let factory;
if (system == OS.Mac) {
    factory = new MacFactory();
}
else if (system == OS.Windows) {
    factory = new WinFactory();
}
else {
    throw new Error("No OS supported.");
}
const app = new Application(factory);
app.createUI();
app.paint();
