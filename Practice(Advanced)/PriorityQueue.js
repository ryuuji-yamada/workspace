class HeapLibrary{
    static buildMaxHeap(arr){
        let mid = HeapLibrary.parent(arr.length-1);
        for(let i = mid; i >= 0; i--){
            HeapLibrary.maxHeapify(arr,arr.length-1,i);
        }
    }

    static maxHeapify(arr,heapEnd,i){
        let l = HeapLibrary.left(i);
        let r = HeapLibrary.right(i);

        let biggest = i;

        if(l <= heapEnd && arr[l] > arr[biggest]) biggest = l;
        if(r <= heapEnd && arr[r] > arr[biggest]) biggest = r;

        if(i != biggest){
            let temp = arr[i];
            arr[i] = arr[biggest];
            arr[biggest] = temp;
            HeapLibrary.maxHeapify(arr,heapEnd,biggest);
        }
    }

    static left(i){
        return 2*i + 1;
    }
    static right(i){
        return 2*i + 2;
    }

    static parent(i){
        return Math.floor((i-1)/2);
    }
}

class PriorityQueue{
   constructor(arr){

    this.maxHeap = [...arr];
    HeapLibrary.buildMaxHeap(this.maxHeap);
   } 

   top(){//ヒープ配列の先頭を返す
    return this.maxHeap[0];
   }

   pop(){//ヒープ配列の先頭を削除
    let popped = this.maxHeap[0];
    this.maxHeap[0] = this.maxHeap[this.maxHeap.length-1];
    this.maxHeap.pop();
    HeapLibrary.maxHeapify(this.maxHeap,this.maxHeap.length-1,0);
    return popped;
   }

   Intert(x){//xを追加
    this.maxHeap.push(x);
    let i = this.maxHeap.length-1;
    let parent = HeapLibrary.parent(i);
    while(parent >= 0 && this.maxHeap[parent] < x){
        let temp = this.maxHeap[i];
        this.maxHeap[i] = this.maxHeap[parent];
        this.maxHeap[parent] = temp;
        i = parent;
        parent = HeapLibrary.parent(i);
    }
   }
}

let list1 = new PriorityQueue([1,2,3,4,5,6,7,8,9,10]);
console.log(list1);