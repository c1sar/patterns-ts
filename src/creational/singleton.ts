class Database {
    private static instance: Database;

    private constructor() {}

    public static getInstance() {
        if (!Database.instance) {
            console.log('New Database');
            Database.instance = new Database();
        }
        return Database.instance;
    }

    public query(syntax: string) {
        console.log(syntax);
    }
}


const database: Database = Database.getInstance();
database.query('Select * !!');

const database2: Database = Database.getInstance();
database.query('Select 2');
