function bubbleSort(Array) {
    let len = Array.length;
    for (let i = 0; i < len; i++) { 
        for (let j = 0; j < len-1; j++) {
            if (Array[j] > Array[j + 1]) {
                let tmp = Array[j];
                Array[j] = Array[j + 1];
                Array[j + 1] = tmp;
            }
        }
    }
    return Array;
};
let nums =[5,4,3,2,1];
console.log(bubbleSort(nums));