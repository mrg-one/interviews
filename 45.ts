function jump(nums: number[]): number {

    let n = nums.length;
    if (n == 1)
        return 0;

    let jumps = 1;
    let reachable = nums[0];
    let max_within_reachable = nums[0];
    if (reachable >= n - 1)
        return jumps;

    for (let i = 1; i < n; i++) {
        max_within_reachable = Math.max(max_within_reachable, i + nums[i]);

        if (i == reachable) {
            reachable = max_within_reachable;
            jumps++;
            if (reachable >= n - 1)
                break;
        }
    }

    return jumps;
};
const nums45 = [
    [2, 3, 1, 1, 4],
    [3, 2, 1, 0, 4],
    [0, 1],
    [2, 0],
    [2, 3, 1, 1, 4]
]
console.log(canJump(nums45[4]))