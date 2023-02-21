class BinaryTree{
    constructor(data,left = null,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    printInOrder(){
        this.inOrderWalk(this);
        //console.log("");
    }

    inOrderWalk(tRoot){//間順　左→根→右
        if(tRoot != null){
            this.inOrderWalk(tRoot.left);
            console.log(tRoot.data);
            this.inOrderWalk(tRoot.right);
        }
    }
}

class BinarySearchTree{
    constructor(arrList){
        let sortedList = arrList.sort(function(a,b){return a -b;});
        this.root = BinarySearchTree.sortedArrayToBST(sortedList);
        }

        static sortedArrayToBST(array){//ソート済配列を受け取ってBSTを返す
            if(array.length == 0)return null;
            return BinarySearchTree.sortedArrayToBSTHelper(array,0,array.length-1);
        }

        static sortedArrayToBSTHelper(arr,start,end){//Helper関数
            if(start == end)return new BinaryTree(arr[start],null,null);

            let mid = Math.floor((start+end)/2);

            let left = null;
            if(mid-1 >= start) left = BinarySearchTree.sortedArrayToBSTHelper(arr,start,mid-1);

            let right = null;
            if(mid+1 <= end) right = BinarySearchTree.sortedArrayToBSTHelper(arr,mid+1,end);

            let root = new BinaryTree(arr[mid],left,right);
            return root;
        }

        keyExist(key){//ブール値を返す
            let iterator = this.root;
            while(iterator != null){
                if(iterator.data == key)return true;
                if(iterator.data > key) iterator = iterator.left;
                else iterator = iterator.right;
            }
            return false;
        }

        search(key){//探索
            let iterator = this.root;
            while(iterator != null){
                if(iterator.data == key)return iterator;
                if(iterator.data > key)iterator = iterator.left;
                else iterator = iterator.right;
            }
            return null;
        }

        insert(value){//ノードの挿入
            let iterator = this.root;
            while(iterator != null){
                if(iterator.data > value && iterator.left == null)iterator.left = new BinaryTree(value);
                else if(iterator.data < value && iterator.right == null)iterator.right = new BinaryTree(value);
                iterator = (iterator.data > value)? iterator.left : iterator.right;
            }
            return this.root;
        }

        transplant(nodeParent,node,target){
            if(nodeParent == null)this.root = target;
            else if(nodeParent.left == node)nodeParent.left = target;
            else nodeParent.right = target;
        }

        deleteNode(key){
            if(this.root == null)return;//木がnullなら何も起こらない
            let node = this.search(key);//指定のノードがある場合keyとして代入
            if(!this.keyExist(key))return;//もしkeyが無ければ何も起こらない

            let parent = this.findParent(node);//ここの代入はOK?
            //case 1:ノードNが葉ノードの場合
            //親ノードからnodeへの参照をnullに変更してnodeを削除
            if(node.left == null && node.right == null){
                if(parent.left.data == key)parent.left = null;
                else if(parent.right.data == key)parent.right = null;
            }

            //case 2:ノードNの左が空
            if(node.left == null)this.transplant(parent,node,node.right);
            //case 3:ノードNの右が空
            else if(node.right == null)this.transplant(parent,node,node.left);
            //case 4:2つの子ノードを持っている場合
            else{
                let successor = this.findSuccessor(node);
                let successorP = this.findParent(successor);

                //case4.1:後続ノードSがすぐ右側にいる場合、ノードNが後続ノードSの親になっているためcase4は不要
                //単純にNの親であるPの部分木とSを移植すればOK
                //case4.2:後続ノードSがすぐ右側にいない場合、後続Sの親も変更する必要あり
                if(successor != node.right){
                    //後続ノードSをSの右部分木で移植。Sをアップデート
                    this.transplant(successorP,successor,successor.right);
                    //Sの右側はノードNの右側担っている必要がある
                    successor.right = node.right;
                }
                //ノードNを後続Sで移植。Sの左部分木をノードNの左部分木にする。
                this.transplant(parent,node,successor);
                successor.left = node.left;
            }
        }

        findParent(node){
            let iterator = this.root;
            let parent;
            while(iterator != node){
                parent = iterator;
                iterator = iterator.data > node.data ? iterator.left:iterator.right;
            }
            return parent;
        }

        findSuccessor(node){
            let targetNode = node;//部分木
            if(targetNode == null)return null;//keyがBST内に存在しない場合、nullを返す
            if(targetNode.right != null)return this.minimumNode(targetNode.right);//keyのノードの右にある最小値を探す

            let successor = null;
            let iterator = this.root;

            while(iterator != null){
                if(targetNode.data == iterator.data)return successor;
                //successorを左方向へずらしていく
                if(targetNode.dara < iterator.data && (successor == null || iterator.data < successor.data))successor = iterator;
                if(targetNode.data < iterator.data) iterator = iterator.left;
                else iterator = iterator.right;
            }
            return successor;
        }

        minimumNode(node){
            let iterator = node;
            while(iterator != null && iterator.left != null){
                iterator = iterator.left;
            }
            return iterator;
        }

        printSorted(){
            this.root.printInOrder();
        }
    }

    let balancedBST = new BinarySearchTree([15,9,19,4,10,17]);

//case 1~3はOK
//balancedBST.printSorted();
balancedBST.deleteNode(15);
//console.log("");
//balancedBST.printSorted();
