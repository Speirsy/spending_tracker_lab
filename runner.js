const Account = require('./account.js');
const Tag = require('./tag.js');
const Merchant = require('./merchant.js');
const Transaction = require('./transaction');


const fuel = new Tag ('petrol', 50);
const fags = new Tag ('cigarettes', 100);
const milk = new Tag ('Milk', 30);

const lidl = new Merchant ('Lidl', fuel);
const aldi = new Merchant ('Aldi', fags);
const spar = new Merchant ('Spar', milk);



const trans1 = new Transaction(500, '04052022', lidl);
const trans2 = new Transaction(300, '03022022', lidl);
const trans3 = new Transaction(400, '02042022', aldi);

const account = new Account('johns');
const account1 = new Account('Caths');
const account2 = new Account('Norahs');

trans1.output();
trans2.output();


account.addTransaction(trans1);
console.log(account);
account1.addTransaction(trans2);
console.log(account1);
account.addTransaction(trans2);
console.log(account);



// account.showTransactionsAtMerchant()

