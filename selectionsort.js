const myArr =[3,2,9,5,1,4,8]
const arrTest =[4,5,1,3,6,7,10,2,8,9]


    function selectionSort(arr){
        for(let i = 0; i<arr.length; i++){
            let minptr = i;
            for(let j = i+1; j<arr.length; j++){
                if(arr[minptr] > arr[j]){
                    minptr = j;
                }
            }
          //swap
            let temp = arr[i];
            arr[i] = arr[minptr];
            arr[minptr] = temp;
        }
        return arr;
    }
console.log(selectionSort(myArr));