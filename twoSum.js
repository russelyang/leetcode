var twoSum = function(nums, target) {
    var map = {},
        results = [];
    
    for(var i=0; i<nums.length; i++) {
        var diff = target - nums[i];
        if (map[diff] !== undefined) {
            results.push(map[diff]);
            results.push(i);
            break;
        } 
        map[nums[i]] = i;        
    }    
    return results;
     
};

console.log(twoSum([3,3],6));