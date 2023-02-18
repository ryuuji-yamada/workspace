class Heap{
    static left(i){
        return 2*i + 1;
    }

    static right(i){
        return 2*i + 2;
    }

    static parent(i){
        return Math.floor((i-1)/2);
    }

    static maxHeapify(arr,heapEnd,i){//ヒープのサイズを追跡するための拡張
        let l = Heap.left(i);
        let r = Heap.right(i);
        let biggest = i;

        //heapHendより後ろは既にソートされているため、lとrのインデックスはheapEndまでを比較
        if(l <= heapEnd && arr[l] > arr[biggest]) biggest = l;
        if(r <= heapEnd && arr[r] > arr[biggest]) biggest = r;

        if(biggest != i){
            let temp = arr[i];
            arr[i] = arr[biggest];
            arr[biggest] = temp;
            Heap.maxHeapify(arr,biggest);
        }
    }

    static buildMaxHeap(arr){
        let middle = Heap.parent(arr.length);
        for(let i = middle; i >=0; i--){//最後の葉ノードの親から根までmaxHeapifyする
            Heap.maxHeapify(arr,i);
        }
    }

    static heapSort(arr){
        //まずbuildMaxHeapでarrをヒープ構造にする。一番上が最大値
        Heap.buildMaxHeap(arr);

        //ヒープサイズを追跡するためheapEndを配列の最後の要素にする
        let heapEnd = arr.length - 1;
        while(heapEnd > 0){
            //最大値であるヒープの根ノードと葉ノードheapEndを入れ替える
            let temp = arr[heapEnd];
            arr[heapEnd] = arr[0];
            arr[0] = temp;

            //一番最後はソート済のため、heapEndから１を引く
            heapEnd--;
            Heap.maxHeapify(arr,heapEnd,0);
        } 
    }
}

let heap1 = [2,42,11,30,10,7,6,5,9];
console.log(heap1);
Heap.heapSort(heap1);
console.log(heap1); // 昇順にソートされました。

let heap2 = [56,4,51,10,12,5,12,4,6,5];
console.log(heap2);
Heap.heapSort(heap2);
console.log(heap2);