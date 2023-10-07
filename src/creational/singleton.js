"use strict";
class Database {
    constructor() { }
    static getInstance() {
        if (!Database.instance) {
            console.log('New Database');
            Database.instance = new Database();
        }
        return Database.instance;
    }
    query(syntax) {
        console.log(syntax);
    }
}
const database = Database.getInstance();
database.query('Select * !!');
const database2 = Database.getInstance();
database.query('Select 2');
