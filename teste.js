let n = 7;
let totalMatches = 0;
while (n > 1) {
  if (n % 2 == 0) {
    n = n / 2;
    totalMatches = totalMatches + n;
  } else {
    n = (n - 1) / 2;
    totalMatches = totalMatches + n + 1;
  }
}
console.log(totalMatches);
//console.log(totalMatches);
//console.log(n);
/*
let partidaA = n / 2;
let equipesA = n / 2;
let partidaB = (n - 1) / 2;
let equipesB = (n - 1) / 2 + 1;


    while(n > 1){
        if(numberOfMatches %2 === 0){
          totalMatches = partidaA + equipesA;
          n--;
        }else {
          totalMatches = (partidaB + equipesB) -1;  
          n--;
        }
    }
    */
