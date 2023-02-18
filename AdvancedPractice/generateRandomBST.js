class BinaryTree{
    constructor(data,left = null,right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }

    inOrderWalk(root,arr){
        if(root != null){
            this.inOrderWalk(root.left,arr);
            arr.push(root.data);
            this.inOrderWalk(root.right,arr);
        }
        return arr;
    }
}

class BinarySearchTree{
    constructor(arrList){
        this.generateRandomBST(arrList);
    }

    generateRandomBST(arrList){//受け取った配列をシャッフルしてBSTを作る
    if(!arrList.length){
        this.root = null;
    }else{
        BinarySearchTree.shuffle(arrList);
        this.root = new BinaryTree(arrList[0]);
        for(let i = 1; i < arrList.length; i++){
            this.insert(arrList[i]);//シャッフルした配列の要素を一つづつBSTに挿入
        }
    }
    }

    insert(value){//要素の挿入
        let iterator = this.root;
        while(iterator != null){
            if(iterator.data > value && iterator.left == null)iterator.left = new BinaryTree(value);
            else if(iterator.data < value && iterator.right == null)iterator.right = new BinaryTree(value);
            iterator = (iterator.data > value)?iterator.left : iterator.right;
        }
        return this.root;
    }

    static shuffle(list){//in-placeでシャッフルする
        for(let i = list.length - 1; i >= 0; i--){
            const j = Math.floor(Math.random()*(i+1));
            [list[i],list[j]] = [list[j],list[i]];
        }
        return list;
    }

    static maximumDepth(root){
        if(root == null)return 0;
        let leftdepth = BinarySearchTree.maximumDepth(root.left);
        let rightdepth = BinarySearchTree.maximumDepth(root.right);
        return (rightdepth > leftdepth)? rightdepth + 1: leftdepth + 1;
    }

    printSorted(){
        if(this.root == null)return;
        console.log(this.root.inOrderWalk(this.root,[]));
    }
}

class RandomContainer{//昇順に並んだ配列を作成
    static generateList(size){
        let list = [];
        for(let i = 0; i < size; i++){
            list.push(i);
        }
        return list;
    }
}

let list = RandomContainer.generateList(126);
let balancedBST = new BinarySearchTree(list);
//balancedBST.printSorted();
console.log("MaxDepth: " + BinarySearchTree.maximumDepth(balancedBST.root));

let list2 = RandomContainer.generateList(256);
let balancedBST2 = new BinarySearchTree(list2);
//balancedBST2.printSorted();
console.log("MaxDepth: " + BinarySearchTree.maximumDepth(balancedBST2.root));

let list3 = RandomContainer.generateList(1024);
let balancedBST3 = new BinarySearchTree(list3);
console.log("MaxDepth: " + BinarySearchTree.maximumDepth(balancedBST3.root));

console.log(16*16) // 要素数が増えると高さが O(logn) に近づく。