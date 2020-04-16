function primeFactor2(num){
  let primeAndFactor= [];
  for(let i=2;i<=num;i++){
    
    if(num%i===0){
      num=num/i;//this is the main deal breaker..
      let factor = i;
      isPrime = true;

      for(j=2;j<factor;j++){
        if(factor % j ===0){
          isPrime= false;
        }
      }

      if(factor && isPrime){
        primeAndFactor.push(factor);
      }
      
    }
  }

  return primeAndFactor.pop();
}
