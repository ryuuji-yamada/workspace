//コンパイルコマンドはtsc
//cdでディレクトリを変更
//パスはC:以降を""で囲むこと
/*==================================
グローバル変数
===================================*/
//スタートからの経過時間(ミリ秒)
let timeCount:number = 0;
//計測状態(計測中:true,停止中:false)
let isRunning:boolean = false;
//タイマーの識別ID
let timerID:number = 0;
//カウント表示部
let elmCount:HTMLElement = document.querySelector("#count")!;
//スタートボタン
let elmStart:HTMLElement = document.querySelector("#start")!;
//リセットボタン
let elmReset:HTMLElement = document.querySelector("#reset")!;

/*==================================
イベントハンドラ
===================================*/
//アプリケーション初期化
const onPageLoad = () => {
    updateView();
};

//スタート処理
const onStart = () => {
    if(isRunning == false){
        startTimer();
    }else{
        stopTimer();
    }
};

//リセット処理
const onReset = () => {
    stopTimer();
    resetCount();
    updateView();
};

/*==================================
イベントリスナー
===================================*/
//ページの読み込み完了イベント
window.addEventListener("load",onPageLoad);

//スタートボタンのクリックイベント
elmStart.addEventListener("click",onStart);

//リセットボタンのクリックイベント
elmReset.addEventListener("click",onReset);

/*==================================
ユーザ定義関数
===================================*/
//描画更新
function updateView(){
    if(timeCount > 60*60*1000 - 1){
        timeCount = 60*60*1000 - 1;
    }
    //「分」を求める
    const mm:string = Math.floor(timeCount / 1000 / 60).toString().padStart(2,"0");
    //「秒」を求める
    const ss:string = (Math.floor(timeCount / 1000) % 60).toString().padStart(2,"0");
    //「ミリ秒」を求める
    const ms:string = (timeCount % 1000).toString().padStart(3,"0").slice(0,2);
    //表示する文字列を編集
    const count:string = mm + ":" + ss + "<small>" + ms + "</small>";
    //カウントの表示を更新
    elmCount.innerHTML = count;
}

//計測スタート
function startTimer(){
    timerID = setInterval(() => {
        timeCount += 10;
        updateView();
    },10);
    isRunning = true;
}

//計測停止
function stopTimer(){
    clearInterval(timerID);
    isRunning = false;
}

function resetCount(){
    timeCount = 0;
}

/*
コンパイル時にProperty 'padStart' does not exist on type 'string'というエラーが出るが未解決
プログラム自体は問題なく動く
*/
