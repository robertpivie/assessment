import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BracketTesterService {

  constructor() { }

  test(input: string): boolean {
    return !input || this.isBalanced(input);
  }

  isBalanced(input: string): boolean {
    let balance: number = 0;

    for (let n of input) {
      balance += (n === "{") ? 1 : 0;
      balance -= (n === "}") ? 1 : 0;
      if (balance < 0) {
        return false;
      }
    }

    return balance === 0;
  }
}
