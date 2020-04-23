let isPalindrome = (x) => {
    if(x<0 || isNaN(x)) return false;
    
    let reverse = 0;
    const compare = x;
    
    while(x){
        let rem = x%10;
        reverse = reverse*10 + rem;
        x= Math.floor(x/10);
    }
    
    return compare == reverse ;
};
