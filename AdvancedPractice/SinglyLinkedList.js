class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }

    //新しいノードを受け取って次のノードに設定する
    addNextNode(newNode){
        let tempNode = this.next;
        this.next = newNode;
        newNode.next = tempNode;
    }
}

class SinglyLinkedList{
    //配列が渡されるようにする
    constructor(arr){
        //連結リストにはheadが必要。
        //配列に要素が存在しなければ、nullを初期値とする。
        this.head = arr.length > 0? new Node(arr[0]) : new Node(null);

        let currentNode = this.head;
        for(let i = 1; i < arr.length; i++){
            currentNode.next = new Node(arr[i]);//新しい連結先を作成
            currentNode = currentNode.next;//nextに新しい連結先を設定
        }
    }
    at(index){
        let iterator = this.head;
        for(let i = 0; i < index; i++){
            iterator = iterator.next;
            if(iterator == null)return null;
        }
        return iterator;
    }
    preappend(newNode){
        newNode.next = this.head;
        this.head = newNode;
    }
    popFront(){//リストの先頭の要素を削除
        this.head = this.head.next;
    }
    delete(index){
        if(index == 0) return this.popFront();//削除するインデックスが先頭の場合
        let iterator = this.head;
        for (let i = 0; i < index - 1; i++) {//対象のインデックス前まで探索
            if(iterator.next == null) return null;//index範囲外
            iterator = iterator.next;
        }
        iterator.next = iterator.next.next;
        //iterator(削除の１つ前)のnextを２つ後ろに設定する
    }
    reverse(){
        if(this.head == null || this.head.next == null)return;

        let reverse = this.head;//A
        this.head = this.head.next;//B=head
        reverse.next = null;//A.next = null
        while(this.head != null){
            let temp = this.head;//B
            this.head = this.head.next;//C=head
            temp.next = reverse;//B→A
            reverse = temp;//B→A=???
        }        
        this.head = reverse;
    }
    printList(){//ノードのデータを出力
        let iterator = this.head;
        let str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.next;
        }
        console.log(str);
    }
}

let numList = new SinglyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);

numList.printList();
numList.reverse();
numList.printList();