function removeDuplicates(nums: number[]): number {
    const uniques = Array.from(new Set(nums))

    for (let i = 0; i < uniques.length; i++) {
        nums[i] = uniques[i];
    }

    return uniques.length
};


const nums26 = [1,1,2]
console.log({k: removeDuplicates(nums26), nums26})