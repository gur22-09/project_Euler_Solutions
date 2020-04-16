function evenFibsum(n){
  let fib3 = 2;
  let fib6 = 0;
  let result = 2;
  let sum = 0;

  while(sum <n){
    sum+=result;
    
    result = 4*fib3+fib6;
    fib6=fib3;
    fib3=result;
  } 

  return sum;
}
