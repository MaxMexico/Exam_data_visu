function twoSum(nums, target) {
    const indices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        if (indices.has(complement)) {
            return [indices.get(complement), i];
        }
        
        indices.set(nums[i], i);
    }
    
    return null;
}

console.log(twoSum([2, 7, 11, 15], 9));