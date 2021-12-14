"use strict";

function fiftyThirtyTwenty(num) {
  return {
    Needs: (num * 50) / 100,
    Wants: (num * 30) / 100,
    Savings: (num * 20) / 100,
  };
}

console.log(fiftyThirtyTwenty(10000));
