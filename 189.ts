/**
 Do not return anything, modify nums in-place instead.
 */

 function rotate(nums: number[], k: number): void {
    const dummy = [] as number[]

    for (let i = 0; i < nums.length; i++) {
        dummy[i + k >= nums.length ? (i + k - nums.length) % nums.length : i + k] = nums[i]
    }
    dummy.forEach((v, i) => nums[i] = v)
 };

 const nums189 = [-1], k = 2
 rotate(nums189, k)
 console.table(nums189)