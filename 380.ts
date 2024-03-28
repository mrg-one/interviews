class RandomizedSet {

    dataSpot: number[] = []; //value (v) of dataSpot[index] = data[v] = index
    data: number[] = [];

    constructor() {
        
    }
    // NaN = element not existent
    insert(val: number): boolean {
        const v = this.dataSpot[val]
        if(Number.isNaN(v)){
            this.dataSpot[this.data.push(val)] = val
        }

        return Number.isNaN(v)
    }

    remove(val: number): boolean {
        const v = this.dataSpot[val]

        if(!Number.isNaN(v)){
            this.data
            this.dataSpot[val] = val
        }

        return !Number.isNaN(v)
    }

    getRandom(): number {
        «
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */