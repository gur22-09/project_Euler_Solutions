
var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length-1]) return nums.length;
    
    for (let i=0 ; i<nums.length ; i++) {
        if (nums[i] === target || (nums[i] > target && nums[i-1] < target)) {
            return i;
        } else if (nums[i] > target) {
            return i-1
        }
    }
};
   

