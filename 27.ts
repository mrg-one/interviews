function removeElement(nums: number[], val: number): number {

    const temp = nums.filter(v => v !== val)

    for (let i = 0; i < temp.length; i++) {
        nums[i] = temp[i];
    }

    return temp.length
};

const nums = [3,2,2,3]
const val = 3


console.log(nums.splice(0,removeElement(nums, val)))