function problem1(n){
  if(n<=1) return undefined;
  var  n=n-1;
  let largestIn3Series = (n - n%3);
  let largestIn5Series = (n - n%5);
  let largestIn15Series = (n-n%15);
  console.log(largestIn3Series,largestIn5Series,largestIn15Series)
  const series3Sum = ((largestIn3Series/3)/2)*(3+largestIn3Series);

  const series5Sum = ((largestIn5Series/5)/2)*(5+largestIn5Series);

  const series15Sum = ((largestIn15Series/15)/2)*(15+largestIn15Series);


  console.log(series3Sum,series5Sum,series15Sum)
  return series3Sum + series5Sum - series15Sum;
}
