function removeDuplicates(nums: number[]): number {
    // thought the array was unsorted
  const order = new Map<number, { counter: number; position: number }>();

  nums.forEach((n, i) => {
    const getted = order.get(n);

    if (getted) {
      order.set(n, { counter: getted.counter + 1, position: getted.position });
    } else {
      order.set(n, { counter: 1, position: i });
    }
  });
const finalNums = [] as number[]

   Array.from(order.entries()).sort(
    (a, b) => a[1].position - b[1].position
  ).forEach(v => {
    finalNums.push(v[0])
    if(v[1].counter > 1)
        finalNums.push(v[0]);
  })

  for (let i = 0; i < finalNums.length; i++) {
    nums[i] = finalNums[i];
  }

  return finalNums.length;
}

const nums80 = [1, 1, 1, 2, 2, 3];
const k = removeDuplicates(nums80)
console.log({k , nums: nums80.slice(0, k)});
