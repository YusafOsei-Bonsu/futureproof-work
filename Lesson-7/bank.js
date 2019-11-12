class BankAccount {
    constructor(pin) {
        this._balance = 1000;
        this._pin = pin;
    }

    deposit(funds) {
        this._pin == '1234' ? this._balance += funds : console.log('Wrong pin.');
    }

    withdraw(funds) {
        if (this._pin == '1234') {
            if ((this._balance >= funds) && (this._balance > 0) && (this._pin == '1234')) {
                this._balance -= funds;
            }
        } else {
            console.log('Wrong pin.');
        }
    }

    get view() {
        return this._balance;
    }
}

const myAccount = new BankAccount('0000');
console.log(myAccount.view);
myAccount.deposit(9000);
console.log(myAccount.view);
myAccount.withdraw(5000);
console.log(myAccount.view);
