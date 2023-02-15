function printDuplicates(inputList){
    let hashmap = {};

    for(let i = 0; i < inputList.length; i++){
        //ハッシュマップ内に値が存在しないとき、1を設定
        if(hashmap[inputList[i]] === undefined){
            hashmap[inputList[i]] = 1;
    }else{
        //すでにハッシュマップ内に値が存在するときは+1
        hashmap[inputList[i]] = hashmap[inputList[i]] + 1;
    }
  }
  //Objectライブラリですべてのキーを出力
  //※キャッシュされた順に出力されるわけではない
  let keys = Object.keys(hashmap);
  console.log(keys);

  //キャッシュされた情報を出力
  for(let i = 0; i < keys.length; i++){
    console.log(keys[i] + " has " + hashmap[keys[i]] + "duplicates.");
  }
}

printDuplicates([1,1,1,1,1,2,2,2,2,2,2,3,3,3,4,5,6,6,6,6,7,8,8,8,9,9,9]);
printDuplicates([7,7,6,6,3,5,3,9,2,5,5,4,6,4,1,4,1,7,2]);