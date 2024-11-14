// BankAccount
// Depositing
// Withdrawing
// Balance - hidden - encapsulated

class BankAccount {
  private _balance: number;
  constructor(initialBalance: number) {
    this._balance = initialBalance;
  }

  // Getter to get balance of the bank account
  // No direct contact with the user to check the balance
  // So we are not accessing or giving access to the user to directly access the balance and change it.
  // But instead we are providing this interface or a getter method to get the balance of the bank account.
  // Now this is an example of encapsulation because in this class your balance is perfectly encapsulated.
  public get balance(): number {
    return this._balance;
  }

  // Deposit Money
  public deposit(ammount: number): void {
    if (ammount < 0) {
      console.log("Invalid Deposit Ammount");
      return;
    }

    this._balance += ammount;
  }

  // Withdrow Money
  public withdrow(ammount: number): void {
    if (ammount < 0) {
      console.log("Invalid Withdrowing Ammount");
      return;
    }
    if (this._balance - ammount < 0) {
      console.log("Not Enough Money");
      return;
    }
    this._balance -= ammount;
  }
}

const myAccount = new BankAccount(1000);
myAccount.deposit(200);
myAccount.balance;
console.log("👊 ~ file: index.ts:50 ~ myAccount.balance:", myAccount.balance);
myAccount.withdrow(500);
myAccount.balance;
console.log("👊 ~ file: index.ts:53 ~ myAccount.balance;:", myAccount.balance);
