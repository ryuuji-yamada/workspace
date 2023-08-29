/*＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
グローバル変数 
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
//表示中の年月
const currentDate:Date = new Date();
//タイトル表示部
const elmTitle:HTMLElement = document.querySelector(".cal_title")!;
//前月移動ナビ
const elmPrev:HTMLElement = document.querySelector(".cal_prev")!;
//翌月移動ナビ
const elmNext:HTMLElement = document.querySelector(".cal_next")!;
//日付表示部
const elmDays:HTMLElement = document.querySelector(".cal_days")!;
/*＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
イベントハンドラ 
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
//アプリケーション初期化
const onPageLoad = ():void => {
    updateView(currentDate);
};

//前月移動処理
const onPrev = ():void => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateView(currentDate);
};

//翌月移動処理
const onNext = ():void => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateView(currentDate);
};

/*＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
イベントリスナー
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
//ページ読み込み完了イベント
window.addEventListener("load",onPageLoad);
//前月移動ナビのクリックイベント
elmPrev.addEventListener("click",onPrev);
//翌月移動ナビのクリックイベント
elmNext.addEventListener("click",onNext);
/*＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
ユーザ定義関数
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
function updateView(date:Date):void{
    updateTitle(date);
    updateDays(date);
}

function updateTitle(date:Date):void{
    const title:string = date.getFullYear().toString() + "年" + (date.getMonth() + 1).toString().padStart(2,"0") + "月";
    elmTitle.innerHTML = title;
}

function updateDays(date:Date):void{
    const dateList:number[] = [];
    const classList:string[] = [];

    //当月の日数を求める
    const thisDays:number = getMonthDays(date);
    //当月の１日より左側に表示する日数を求める
    const prevDays:number = getFirstDayOfWeek(date);
    //前月の末日を求める
    const prevLastDate:number = getPrevMonthDays(date);
    //当月の表示に必要な行数を求める
    const rows:number = Math.ceil((thisDays + prevDays) / 7);

    //セルの個数だけ繰り返す
    for(let i:number = 0; i < rows*7;i++){
        //i番目のセルが前月の場合
        if(i < prevDays){
            dateList.push(prevLastDate - prevDays + 1 + i);
            classList.push("cal_day cal_day--prev");
        }else if(prevDays <= i && i < prevDays + thisDays){
            dateList.push(i - prevDays + 1);
            if(i % 7 == 0){
                classList.push("cal_day cal_day--sun");
            }else if(i % 7 == 6){
                classList.push("cal_day cal_day--sat");
            }else{
            classList.push("cal_day");
            }
        //i番目のセルが翌月の場合
        }else{
            dateList.push(i - (prevDays + thisDays) + 1);
            classList.push("cal_day cal_day--next");
        }
    }
    //HTMLを格納する変数
    let html:string = "";

    //セルの個数だけ繰り返す
    for(let i:number = 0; i < rows*7; i++){
        if(i % 7 == 0){
            html += "<tr>";
        }
        html += '<td class="' + classList.shift() + '">' + dateList.shift()?.toString() + "</td>";
        if(i % 7 == 6){
            html += "</tr>";
        }
    }
    elmDays.innerHTML = html;
}

function getMonthDays(date:Date):number{
    const lastDay:Date = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate());
    
    lastDay.setMonth(lastDay.getMonth() + 1);
    lastDay.setDate(0);

    const days:number = lastDay.getDate();
    return days;
}

function getFirstDayOfWeek(date:Date):number{
    const firstDay:Date = new Date(
        date.getFullYear(),
        date.getMonth(),
        1);

    const day:number = firstDay.getDay();
    return day;
}

function getPrevMonthDays(date:Date):number{
    const prevMonth:Date = new Date(
        date.getFullYear(),
        date.getMonth() -1);
    
    const days: number = getMonthDays(prevMonth);
    return days;
}

//padstartにてエラー通知。プログラム自体は動く