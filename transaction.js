const Transaction = function(amount, date, merchant){
    this.amount = amount;
    this.date = date;
    this.merchant = merchant;
};

Transaction.prototype.output = function(amount){
    console.log(`£${this.amount}`)
};

module.exports = Transaction;