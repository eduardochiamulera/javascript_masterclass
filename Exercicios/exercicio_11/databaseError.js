module.exports = class DatabaseError {
    constructor(statement, message) {
        this.statement = statement;
        this.message = message;
    }
}