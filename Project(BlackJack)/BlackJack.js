/***********************************************
  グローバル変数
************************************************/

//カードの山
let cards = [];
//自分のカード
let myCards = [];
//相手のカード
let comCards = [];
//勝敗決定フラグ(boolean値)
let isGameOver = false;

/***********************************************
  イベントハンドラの割り当て
************************************************/

//ページの読み込みが完了したとき実行する関数を登録
window.addEventListener("load",loadHandler);

//「カードを引く」ボタンを押したとき実行する関数を登録
document.querySelector("#pick").addEventListener("click",clickPickHandler);

//「勝負する」ボタンを押したとき実行する関数を登録
document.querySelector("#judge").addEventListener("click",clickJudgeHandler);

//「もう一回遊ぶ」ボタンを押したとき実行する関数を登録
document.querySelector("#reset").addEventListener("click",clickResetHandler);

/***********************************************
  イベントハンドラ
************************************************/

//ページ読み込みの関数
function loadHandler(){
  //シャッフル
  shuffle();
  //自分がカードを引く
  pickMyCard();
  //相手がカードを引く
  pickComCard();
  //画面を更新する
  updateView();
}

//「カードを引く」ボタン押したとき実行する関数
function clickPickHandler(){
  if(isGameOver == false){
    pickMyCard();
    pickComCard();
    updateView();
    debug();
  }
}

//「勝負する」ボタンを押したとき実行する関数
function clickJudgeHandler(){
  let result = "";
  if(isGameOver == false){
  result = judge();
  showResult(result);
  isGameOver = true;
  }
}

//「もう一回遊ぶ」ボタンを押したとき実行する関数
function clickResetHandler(){
  cards = [];
  myCards = [];
  comCards = [];
  isGameOver = false;

  loadHandler();
}

/***********************************************
  ゲーム関数
************************************************/

//カードの山をシャッフルする関数
function shuffle(){
  //カードの初期化
  for(let i = 1; i <= 52; i++){
    cards.push(i);
  }
  //山からランダムに選んだ2枚を入れ替える(100回)
  for(let i = 0; i < 100; i++){
    let j = Math.floor(Math.random() * 52);
    let k = Math.floor(Math.random() * 52);
    let temp = cards[j];
    cards[j] = cards[k]
    cards[k] = temp;
  }
}

//自分がカードを引く関数
function pickMyCard(){
  if(myCards.length <= 4){
    //カードの山(配列)から1枚取り出す
    let card = cards.pop();
    //取り出した一枚を自分のカード(配列)に追加する
    myCards.push(card);
  }
}

//相手がカードを引く関数
function pickComCard(){
  if(comCards.length <= 4){
    if(pickAI(comCards)){
      //カードの山(配列)から1枚取り出す
      let card = cards.pop();
      //取り出した一枚を相手のカード(配列)に追加する
      comCards.push(card);
    }
  }
}

//カードを引くかどうか考える関数
function pickAI(handCards){

//現在のカードの合計を求める
let total = getTotal(handCards);
//カードを引くかどうか
let isPick = false;

if(total <= 11){//合計が11以下なら引く
  isPick = true;
}else if(total >= 12 && total <= 14){//合計が12~14なら80%の確率で引く
  if(Math.random() < 0.8){
    isPick = true;
  }
}else if(total >= 15 && total <= 17){//合計が15~17なら35%の確率で引く
  if(Math.random() < 0.35){
    isPick = true;
  }
}else if(total >= 18){//合計が18以上なら引かない
  isPick = false;
}

  //引くか引かないかを戻り値で返す
  return isPick;
}

//カードの合計を計算する関数
function getTotal(handCards){
  let total = 0;//計算した合計を入れる
  let number = 0;//カードの数字を入れる
  for(let i = 0; i < handCards.length; i++){
    //13で割った余りを求める
    number = handCards[i] % 13;
    //J,Q,Kは10とみなす(余りが11,12,0の場合)
    if(number == 11 || number == 12 || number == 0){
      total += 10;
    }else{
      total += number;
    }
  }
  //Aのカードを含んでいる場合
  if(handCards.includes(1) || handCards.includes(14) || handCards.includes(27) || handCards.includes(40)){
    //Aを11とみなしても合計が21を超えなければ11とみなす
    if(total + 10 <= 21){
      total += 10;
    }
  }
  //合計を返す
  return total;
}

//画面を更新する関数
function updateView(){
  //自分のカードを表示する
  let myfields = document.querySelectorAll(".myCard");
  for(let i = 0; i < myfields.length; i++){
    if(i < myCards.length){
      //表面のカード画像を表示する
      myfields[i].setAttribute('src',getCardPath(myCards[i]));
    }else{
      //裏面のカード画像を表示する
      myfields[i].setAttribute('src',"blue.png");
    }
  }
  //相手のカードを表示する
  let comFields = document.querySelectorAll(".comCard");
  for(let i = 0; i < comFields.length; i++){
    if(i < comCards.length){
      //表面のカード画像を表示する
      comFields[i].setAttribute('src',getCardPath(comCards[i]));
    }else{
      //裏面のカード画像を表示する
      comFields[i].setAttribute('src',"red.png");
    }
  }
  //カードの合計を再計算する
  document.querySelector("#myTotal").innerText = getTotal(myCards);
  document.querySelector("#comTotal").innerText = getTotal(comCards);
}

//カードの画像パスを求める関数
function getCardPath(card){
  let path = "";
  if(card <= 9){
    path = "0" + card + ".png";
  }else{
    path = card + ".png";
  }
  return path;
}

//勝敗を判定する関数
function judge(){
  let result = "";
  let myTotal = getTotal(myCards);
  let comTotal = getTotal(comCards);
  if(myTotal > 21 && comTotal <= 21){
    result = "loose";
  }else if(myTotal <= 21 && comTotal > 21){
    result = "win";
  }else if(myTotal > 21 && comTotal > 21){
    result = "draw";
  }else{
    if(myTotal > comTotal){
      result = "win";
    }else if(myTotal < comTotal){
      result = "loose";
    }else{
      result = "draw";
    }
  }
  return result;
}

function showResult(result){
  let message = "";
  switch(result){
    case "win":
      message = "あなたの勝ちです";
      break;
    case "loose":
      message = "あなたの負けです";
      break;
    case "draw":
      message = "引き分けです";
      break;
  }
  alert(message);
}
/***********************************************
  デバッグ関数
************************************************/
function debug(){
  console.log("カードの山",cards);
  console.log("自分のカード",myCards,"合計" + getTotal(myCards));
  console.log("相手のカード",comCards,"合計" + getTotal(comCards));
  console.log("勝敗決定フラグ",isGameOver);
}
