function canJump(nums: number[]): boolean {
    let lastJump = nums.length - 1

    for (let i = lastJump - 1; i > 0; i--) {
        if (nums[i] >= lastJump - i) {
            lastJump = i
        }
    }

    return nums[0] >= lastJump
};

const nums55 = [
    [2,3,1,1,4],
    [3,2,1,0,4],
    [0,1],
    [2,0],
    [2,3,1,1,4]
]
console.log(canJump(nums55[4]))