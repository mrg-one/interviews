

function hIndex(citations: number[]): number {
    return citations.sort((a,b) => b-a).filter((x,i) => x > i).length 
};

const citations = [[3,0,6,1,5], [1,3,1], [100]]

console.log(hIndex(citations[2]))