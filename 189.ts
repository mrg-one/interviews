/**
 Do not return anything, modify nums in-place instead.
 */

 function rotate(nums: number[], k: number): void {
    k = k % nums.length;
    [ ...nums.slice(-k), ...nums.slice(0, k + 1)].slice(0, nums.length).forEach(
        (val, i) => nums[i] = val);
 };

 const nums189 = [1,2], k = 3
 rotate(nums189, k)
 console.table(nums189)