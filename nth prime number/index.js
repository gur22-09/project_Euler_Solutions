const nthPrime = n =>{
  let primeNum = [];
  
  if(n<=0 || typeof(n) !== 'number') return undefined;

  for(let i=2;primeNum.length<n;i++){
    if(isPrime(i)){
      primeNum.push(i);
       
    }
  }
   
  return primeNum.pop();
}


function isPrime(num){
  for(let i=2;i<num;i++){
    if(num%i === 0){
      return false;
    }
  }

  return true;
}

100thPrimeNum = nthePrime(100);
