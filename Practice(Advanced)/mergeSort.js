function mergeSort(){
    return mergeSortHelper(arr,0,arr.length-1);
}

function mergeSortHelper(arr,start,end){
    //配列が1つになるまで再帰的に分割
    //1つになったらマージ
    if(start == end)return[arr[start]];

    //配列が2つ以上のときはleftArrとrightarrに分割し続ける
    let mid = Math.floor((start + end)/2);
    let leftArr = mergeSortHelper(arr,start,mid);
    let rightArr = mergeSortHelper(arr,mid+1,end);

    //leftArrとrightArrそれぞれの最後に無限大を入れる
    //ソートが完了するまで比較し続ける
    leftArr.push(Infinity);
    rightArr.push(Infinity);

    let l = leftArr.length + rightArr.length -2;
    let li = 0;
    let ri = 0;

    let merged = [];

    while(li + ri < l){
        if(leftArr[li] <= rightArr[ri]){
            merged.push(leftArr[li]);
            li++;
        }else{
            merged.push(rightArr[ri]);
            ri++;
        }
    }

    return merged;
}

let arr1 = [34,4546,32,3,2,8,6,76,56,45,34,566,1];
console.log(arr1);
console.log(mergeSort(arr1));