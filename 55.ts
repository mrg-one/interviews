function canJump(nums: number[]): boolean {

    if(nums.length === 0 || nums.length === 1)
        return true
   
    nums = nums.filter(v => v !== 1)
    for (let index = 0; index < nums.length; index++) {
        if(nums[index] === 0)
            return index === nums.length - 1
        if( nums[index + 1] - nums[index] > nums[index])
            return false
    }

    return true
};

const nums55 = [0,1]
console.log(canJump(nums55))