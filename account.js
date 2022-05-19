const Account = function(name){
    this.name = name;
    this.transactions = []
}




Account.prototype.addTransaction = function(transaction){
    this.transactions.push(transaction)
};

// Account.prototype.showTransactionsAtMerchant = function(){
//     this.transactions.
// }

module.exports = Account

