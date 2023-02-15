function printArray(intArr){
    let outputString = "[";
    for(let i = 0; i < intArr.length; i++){
        outputString += intArr[i] + " ";
    }
    console.log(outputString + "]");
}

let dArr = [2,3];

console.log("Insert/Delete at the beginning O(n)");
printArray(dArr);//2,3

//先頭に要素を追加:unshift()
dArr.unshift(1);
printArray(dArr);//1,2,3

//最初の要素を削除:shift()
dArr.shift();//2,3
printArray(dArr);

//特定のインデックス位置にある要素を削除:splice(スタート,削除したい数,追加したい数)
dArr.unshift(1);//1,2,3
dArr.splice(1,1,4);//1,4,3
printArray(dArr);

console.log("Insert/Delete at the end O(1)");
//配列の最後に要素を追加:push()
dArr.push(5);//1,4,3,5
printArray(dArr);

//配列の最後を削除:pop()
dArr.pop();//1,4,3
printArray(dArr);

//後ろから３つの要素を削除
console.log("後ろから３つの要素を削除");
for(let i = 0; i < 3; i++){
    dArr.pop();
}
printArray(dArr);//[]


