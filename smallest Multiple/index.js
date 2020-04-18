function lcm(a,b){
 
 return a*b/gcd(a,b);
}

function gcd(a,b){ 
 if(b===0) return a;
 return gcd(b,a%b);
}

function smallestMult(n){ 
 let lcmMax = 0;
  
  for(let i=1;i<=n;i++){ 
    lcmMax = lcm(lcmMax,i);
  }
  
  return lcmMax;
}
