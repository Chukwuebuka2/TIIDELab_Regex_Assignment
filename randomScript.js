/*function countDown (n) {
    for (let i = n; i > 0; i--) {
      console.log(i);
    }
}

countDown(10);*/


/*function countDownRecursive(n){
    // first we create our breakout condition 
    if (n < 1){
      return console.log("Hurray");
    }
    console.log(n);
    countDownRecursive(n-1);
  }
  
// running our function
countDownRecursive(5);*/

/*function sumRange(n){
    let total = 0;
    for(let i = n; i > 0; i--){
      total += i;
    }
    return total;
}

console.log(sumRange(5));*/

function sumRangeRecursive(n, total = 0){
    if(n <= 0){
      return total;
    }
    return sumRangeRecursive(n-1, total + n);
  }

console.log(sumRangeRecursive(5));