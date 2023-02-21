class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList{
    constructor(arr){
        if(arr.length <= 0){
            this.head = new Node(null);
            this.tail = this.head;
            return;
        }
        this.head = new Node(arr[0]);
        let currentNode = this.head;
        for (let i = 1; i < arr.length; i++){
                 currentNode.next = new Node(arr[i]);
                 currentNode.next.prev = currentNode;
                 currentNode = currentNode.next;      
        }
        this.tail = currentNode;
    }

    at(index){//index検索
        let iterator = this.head;
        for(let i = 0; i < index; i++){
            iterator = iterator.next;
            if(iterator == null) return null;
        }
        return iterator;
    }

    popFront(){//リストの先頭を削除
        //head.nextをheadにする
        this.head = this.head.next;
        this.head.prev = null;//新headのprevポインタをnull化
    }

    pop(){//リストの末尾を削除
        //tail.prevをtailにする
        this.tail = this.tail.prev;
        this.tail.next = null;//新tailのnextポインタをnull化
    }

    preappend(newNode){//リストの先頭に追加
        //headのprevにnewNodeを設定
        this.head.prev = newNode;
        newNode.next = this.head;
        //newNode.prev = null;//この行は必要なのか???
        this.head = newNode;
    }

    append(newNode){//リストの末尾に追加
        //tailのnextにnewNodeを設定
        this.tail.next = newNode;
        newNode.prev = this.tail;
        //newNode.next = null;//この行は必要なのか???
        this.tail = newNode;
    }

    addNextNode(node,newNode){//与えられたノードの次に追加
        let tempNode = node.next;//newNodeの追加後のnodeをtempとして保存
        node.next = newNode;
        newNode.prev = node;
        newNode.next = tempNode;
        
        if(node == this.tail)this.tail = newNode;
        else tempNode.prev = newNode;
    }

    deleteNode(node){//与えられたノードを削除
        if(node == this.head){
            console.log(node.data + "を削除");
            return this.popFront();
        }
        if(node == this.tail){
            console.log(node.data + "を削除");
            return this.pop();
        }
        //削除するノードの前後のノードのポインタをそれぞれ書き換える
        console.log(node.data + "を削除");
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    reverse(){//逆順のリスト生成
        let reverse = this.tail;
        let iterator = this.tail.prev;//iteratorは元のリストの現在位置

        let currentNode = reverse;//逆バージョンのhead = 元のリストのtail
        while(iterator != null){
            currentNode.next = iterator;//逆リストのhead.next = 元のリストのtail.prev

            iterator = iterator.prev;//元リストを後ろから走査
            if(iterator != null) iterator.next = null;//走査済のノードをnullにする??

            currentNode.next.prev = currentNode;//prev要素を設定
            currentNode = currentNode.next;
        }
        this.tail = currentNode;
        this.head = reverse;
        this.head.prev = null;
    }

    printList(){//リストの表示
        let iterator = this.head;
        let str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.next;
        }
        console.log(str);
    }

    printInReverse(){//リストの逆表示
        let iterator = this.tail;//最後尾から走査
        let str = "";
        while(iterator != null){
            str += iterator.data + " ";
            iterator = iterator.prev;
        }
        console.log(str);
    }
}

let numList = new DoublyLinkedList([35,23,546,67,86,234,56,767,34,1,98,78,555]);
numList.printList();
numList.deleteNode(numList.at(6));
numList.deleteNode(numList.at(8));
numList.deleteNode(numList.at(0));
numList.printList();