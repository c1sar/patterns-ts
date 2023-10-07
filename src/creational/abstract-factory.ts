// Button

interface Button {
    paint: () => void
}

class WinButton implements Button {
    paint() {
        console.log('Painting Windows Button');
    }
}

class MacButton implements Button {
    paint() {
        console.log('Painting Mac Button');        
    }
}

interface Checkbox {
    paint: () => void
}

class WinCheckbox implements Checkbox {
    paint() {
        console.log('Painting Windows Checkbox');
    }
}

class MacCheckbox implements Checkbox {
    paint() {
        console.log('Painting Mac Checkbox');        
    }
}

// Factories

interface GUIFactory {
    createButton: () => Button,
    createCheckbox: () => Checkbox
}

class WinFactory implements GUIFactory {
    createButton(): Button {
        return new WinButton();
    }

    createCheckbox(): Checkbox {
        return new WinCheckbox();
    }
}

class MacFactory implements GUIFactory {
    createButton(): Button {
        return new MacButton();
    }

    createCheckbox(): Checkbox {
        return new MacCheckbox();
    }
}

class Application {
    private factory: GUIFactory;
    private button?: Button;
    private checkbox?: Checkbox;

    constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    public createUI() {
        this.button = this.factory.createButton();
        this.checkbox = this.factory.createCheckbox();
    }

    public paint() {
        this.button?.paint();
        this.checkbox?.paint();
    }
}

enum OS {
    Windows,
    Mac,
}

const system: OS = OS.Mac;
let factory: GUIFactory;


if (system == OS.Mac) {
    factory = new MacFactory();
} else if (system == OS.Windows) {
    factory = new WinFactory();
} else {
    throw new Error("No OS supported.");
}

const app = new Application(factory);
app.createUI();
app.paint();
