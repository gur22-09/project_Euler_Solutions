function sumOfMultiples(n){
  let sum = 0;
  let adjust = 0;

  for(let i=1;i<n;i++){
     if(i%3 === 0){
       sum += i;
     }
  }

  
  for(let i=1;i<n;i++){
     if(i%5 === 0){
       sum += i;
     }
  }

  for(let i=1;i<n;i++){
     if(i%15 === 0){
       adjust += i;
     }
  }

  return sum-adjust;
}
//O(n)

console.log(sumOfMultiples(1000));

function sumOfMultiples2(n){
  const largestNumIn3series = (n%3)*3;
  const largestNumIn5series = (n%5)*5;
  const largestNumIn15series = (n%5)*5;
  
  const sum3 = (largestNumIn3series/3)/2*(3+largestNumIn3series);

  const sum5 = (largestNumIn5series/5)/2*(5+largestNumIn3series);

  const sum15 = (largestNumIn15series/15)/2*(15+largestNumIn3series);
  

  return sum3+sum5-sum15
  
}
//O(1)
console.log(sumOfMultiples(1000));
