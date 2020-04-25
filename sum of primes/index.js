//problem statement - find sum of all the prime numbers below a given number, sumOfPrimes(2000000);
//using the remainder approach on all numbers to check if they are prime wont work.


function primeSummation(n){
    let primes = [];
  
  
    for(let i=0;i<n;i++){
      primes.push(i);
    }
  
    primes[1] = 0;
  
    for(let i=2;i<n;i++){
     if(primes[i] !== 0){
          for(let j=i*i;j<n;j+=i){
           if(primes[j] % j ===0){
            primes[j] = 0;
        }
      }
     }
    }
  
   let sum =  primes.reduce((acc,el)=>acc +=el,0);
  
    return sum;
  }
