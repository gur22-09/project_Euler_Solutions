var searchInsert = function(nums, target) {
   let index=0; 
   if(nums.includes(target)){
       index = nums.find((num,index)=>{
        if(num ===target) return index;
    });
   }else{
       const indexMinus1 = nums.find((num,index)=>{
           if(num>target) return index;
       });
       
       index = indexMinus1 - 1;
       
   }
    
    
   return index; 
   
};
