class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack{//常にheadに対して操作を行う
    constructor(){
        this.head = null;
    }

    push(data){
        let temp = this.head;
        this.head = new Node(data);
        this.head.next = temp;
    }

    pop(){
        if(this.head == null)return null;
        let temp = this.head;
        this.head = this.head.next;
        return temp.data;
    }

    peek(){
        if(this.head == null)return null;
        return this.head.data;
    }
}

function consecutiveWalk(arr){//リストを受け取り、単調減少している部分リストを返す関数
    let stack = new Stack();
    stack.push(arr[0]);
    for(let i = 1; i < arr.length; i++){
        //スタックの上にある要素よりarr[i]が大きい場合、スタックをリセット
        if(stack.peek() < arr[i]){
            //スタックがnullになるまで繰り返す
            while(stack.pop() != null);
        }
        stack.push(arr[i]);
    }
    let results = [];
    while(stack.peek() != null)results.unshift(stack.pop());
    return results;
}

console.log(consecutiveWalk([3,4,20,45,56,6,4,3,5,3,2])); // [5,3,2]
console.log(consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54])); // [64,3,0,-34,-54]
console.log(consecutiveWalk([4,5,4,2,4,3646,34,64,3,0,-34,-54,4])); // [4]