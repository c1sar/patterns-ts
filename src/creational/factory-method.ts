// // Patron Fabrica

// interface Button {
//     render: () => void;
//     onClick: () => void;
// }

// class WindowsButton implements Button {
//     public render() {
//         console.log('Rendering Windows Button');
//     }

//     public onClick() {
//         console.log('OnClick Windows Button');
//     }
// }

// class HtmlButton implements Button {
//     public render() {
//         console.log('Rendering Html Button');
//     }

//     public onClick() {
//         console.log('OnClick Html Button');
//     }
// }

// class MacButton implements Button {
//     public render() {
//         console.log('Rendering Mac Button');
//     }

//     public onClick() {
//         console.log('OnClick Mac Button');
//     }
// }

// abstract class Dialog {

//     public render(): void {
//         let okButton = this.createButton();
//         okButton.render();
//         okButton.onClick();
//     }

//     public abstract createButton(): Button;
// }

// class WindowsDialog extends Dialog {
//     public createButton(): Button {
//         return new WindowsButton();
//     }
// }

// class WebDialog extends Dialog {
//     public createButton(): Button {
//         return new HtmlButton();
//     }
// }

// class MacDialog extends Dialog {
//     public createButton(): Button {
//         return new MacButton();
//     }
// }



// // Application
// const fabricDialog = (os: string): Dialog | undefined => {
//     if (os === 'windows') {
//         return new WindowsDialog();
//     } else if (os === 'web') {
//         return new WebDialog();
//     } else if (os === 'mac') {
//         return new MacDialog();
//     } 
//     return;
// }

// const OS: string = 'mac';
// const dialog = fabricDialog(OS);
// dialog?.render();



