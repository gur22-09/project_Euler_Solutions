function sumSquareDifference(n) {
  
  let sumSq = 0;//sum of the square
  let sum=0
  for(let i=1;i<=n;i++){
     sum += i;
     sumSq +=  Math.pow(i,2);
  }

 console.log(sum,sumSq)

 return Math.pow(sum,2) - sumSq;
}

sumSquareDifference(10);
