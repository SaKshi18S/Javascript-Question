function countArithmeticSequences( nums, N)
{
 
   
    if (N <= 3)
        return 0;
 
   
    var count = 0;
 
    
    var res = 0;
 
    for (var i = 2; i < N; ++i) {
 
       
        if (nums[i] - nums[i - 1] == nums[i - 1] - nums[i - 2]) {
            ++count;
        }
  
        else {
            count = 0;
        }
 
         
        res += count;
    }
 
     
    return res;
}
 
var nums = [ 1, 3, 5, 6, 7, 8 ];
    var N = nums.length;
  
 console.log(countArithmeticSequences(nums, N));