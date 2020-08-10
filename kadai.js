/* ・FizzBuzz問題
1から20までの数を表示するスクリプトを書いてください。
ただし3の倍数のときは数の代わりに Fizz と、5の倍数のときは Buzz と表示し、
3と5両方の倍数の場合には FizzBuzz と表示してください。*/

"use strict";

for(var i=1;i<=20;i++){

  if(i%3===0 && i%5===0){
    // 3と5の倍数の時の処理
    console.log("FizzBuzz");
  }
  else if(i%3===0){
    // 3の倍数の時の処理
    console.log("Fizz");
  }
  else if(i%5===0){
    // 5の倍数の時の処理
    console.log("Buzz");
    }
  else {
    // どれにも当てはまらないとき
    console.log(i);
  }
}
