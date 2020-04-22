//largest prime factor

function largestPrimeFac(num){
  if(num<2) return undefined;
  let prime = [];
  for(let i=2;i<=num;i++){
     if(num%i ===0){
       num = num/i;
       if(isPrime(i)) prime.push(i);
     }
  }

  return prime[prime.length-1];
}


function isPrime(n){
  for(let i=2;i<n;i++){
    if(n%i ===0) return false;
  }

  return true;
}
