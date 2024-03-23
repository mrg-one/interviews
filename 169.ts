function majorityElement(nums: number[]): number {

    const map = new Map<number, number>()

    nums.forEach(n => {
        const getted = map.get(n)
        map.set(n, getted ? getted +  1 : 1)
    })
    return Array.from(map.entries()).sort((a,b) => a[1] - b[1]).map(v => v[0]).pop()!
};

const nums169 = [3,2,3,2,3,2,2,2,2];

console.log(majorityElement(nums169))