function isPalindrome(num){
 const reversedNum = String(num).split('').reverse().join('');

 return Number(reversedNum) === num
}


function largestPalindromeProduct(n) {
  
  //edge case check
   if(n<=1){
     return undefined;
   }
  //create highest product
  let largestPalindrome = 0;
  let largestNumber = '9';
  let lowerLimit = '9';

  largestNumber = Number(largestNumber.repeat(n));

  lowerLimit = Number(lowerLimit.repeat(n-1));
  

  //reduce product and check if palindrome
  for(let i=largestNumber;i>lowerLimit;i--){
    for(let j=largestNumber;j>lowerLimit;j--){
      let product = i*j;
      if(isPalindrome(product)){
        if(product>largestPalindrome){ largestPalindrome = product}
        break; 
      }
    }
  }

  return largestPalindrome;
}
