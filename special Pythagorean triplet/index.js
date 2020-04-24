//there is only one pythagorean triplet that satisfies the condition a+b+c = 1000, find the product abc.
function triplet(n){
 let sum = n;

 for(let a=0;a<n;a++){
     for(let b=a+1;b<n;b++){
         let c = sum -a-b;
         if(c<a+b){
             if(Math.pow(c,2)===Math.pow(a,2)+Math.pow(b,2)){
                 return a*b*c;
             }
         }
     }
 }
}
