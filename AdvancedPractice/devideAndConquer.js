function sumOfArray(arr){
    return sumOfArrayHelper(arr,0,arr.length-1);
}

function sumOfArrayHelper(arr,start,end){
    if(start == end)return arr[start];//最終的にすべての要素をarr[start]に分割して足し合わせる

    let mid = Math.floor((start+end)/2);

    let leftArr = sumOfArrayHelper(arr,start,mid);
    let rightArr = sumOfArrayHelper(arr,mid+1,end);

    return leftArr + rightArr;
}

let arr = [2,4,6,8,10,12];
console.log(sumOfArray(arr));