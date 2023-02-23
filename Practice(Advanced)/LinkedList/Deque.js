class Node{
    constructor(data){
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class Deque{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    peekFront(){//headを参照
        if(this.head == null)return null;
        return this.head.data;
    }

    peekBack(){//tailを参照
        if(this.tail == null)return this.peekFront();
        return this.tail.data;
    }

    enqueueFront(data){//先頭にノードを追加
        if(this.head == null){//queueが空の時の処理
            this.head = new Node(data);
            this.tail = this.head;
        }else{
            this.head.prev = new Node(data);//先頭にnew Nodeを追加
            this.head.prev.next = this.head;//元のheadは今のhead(new Node)のnextになる
            this.head = this.head.prev;////先頭がnew Node→headになる
        }
        //console.log(this.head.data + "を先頭に追加しました");
    }

    enqueueBack(data){//末尾にノードを追加
        if(this.head == null){//queueが空の時の処理※enqueueFrontと同じ処理
            this.head = new Node(data);
            this.tail = this.head;
        }else{
            this.tail.next = new Node(data);//末尾にnew Nodeを追加
            this.tail.next.prev = this.tail;//元のtailは今のtail(new Node)のprevになる
            this.tail = this.tail.next;//末尾がnew Node→tailになる
        }
        //console.log(this.tail.data + "を末尾に追加しました");
    }

    dequeueFront(){//先頭ノードを削除
        if(this.head == null)return null;

        let temp = this.head;//削除対象のノードをtempとする
        this.head = this.head.next;//head.nextが新headになる
        if(this.head == null){//削除してqueueが空になった場合
            this.tail = null;
        }else{
            this.head.prev = null;
            return temp.data;
        }
    }

    dequeueBack(){//末尾のノードを削除
        if(this.tail == null)return null;

        let temp = this.tail//削除対象のノードをtempとする
        this.tail = this.tail.prev;//tail.prevが新tailになる
        if(this.tail == null){//削除してqueueが空になった場合
            this.head = null;
        }else{
            this.tail.next = null;
            return temp.data;
        }
    }
}

function getMax(arr){//両端キューを使用した最大値検索
    let deque = new Deque();
    deque.enqueueFront(arr[0]);//最初の値をdequeに追加
    for(let i = 1; i < arr.length; i++){//最大値を先頭へ、その他は末尾へ向かう
        if(arr[i] > deque.peekFront())deque.enqueueFront(arr[i]);
        deque.enqueueBack(arr[i]);
    }
    return deque.peekFront();
}

console.log(getMax([34,35,64,34,10,2,14,5,353,23,35,63,23]));