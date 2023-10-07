"use strict";
class Doc {
    constructor(data, filename) {
        this.data = data;
        this.filename = filename;
    }
    open() {
        console.log('Opening document...');
    }
}
class Project {
    constructor(documents) {
        this.documents = documents;
        this.writableDocs = [];
        this.documents.forEach((doc) => {
            if (doc instanceof WritableDocument) {
                this.writableDocs.push(doc);
            }
        });
    }
    openAll() {
        this.documents.forEach((doc) => {
            doc.open();
        });
    }
    saveAll() {
        this.writableDocs.forEach((writableDoc) => {
            writableDoc.save();
        });
    }
}
class WritableDocument extends Doc {
    save() {
        console.log('Savign document...');
    }
}
const doc1 = new Doc('Data documento 1', 'Documento 1');
const doc2 = new Doc('Data documento 2', 'Documento 2');
const doc3 = new WritableDocument('Data documento 3', 'Documento 3');
const docs = [doc1, doc2, doc3];
const project = new Project(docs);
project.saveAll();
