/*＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
グローバル変数
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
//表示中の年月
var currentDate = new Date();
//タイトル表示部
var elmTitle = document.querySelector(".cal_title");
//前月移動ナビ
var elmPrev = document.querySelector(".cal_prev");
//翌月移動ナビ
var elmNext = document.querySelector(".cal_next");
//日付表示部
var elmDays = document.querySelector(".cal_days");
/*＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
イベントハンドラ
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
//アプリケーション初期化
var onPageLoad = function () {
    updateView(currentDate);
};
//前月移動処理
var onPrev = function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateView(currentDate);
};
//翌月移動処理
var onNext = function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateView(currentDate);
};
/*＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
イベントリスナー
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
//ページ読み込み完了イベント
window.addEventListener("load", onPageLoad);
//前月移動ナビのクリックイベント
elmPrev.addEventListener("click", onPrev);
//翌月移動ナビのクリックイベント
elmNext.addEventListener("click", onNext);
/*＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
ユーザ定義関数
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝*/
function updateView(date) {
    updateTitle(date);
    updateDays(date);
}
function updateTitle(date) {
    var title = date.getFullYear().toString() + "年" + (date.getMonth() + 1).toString().padStart(2, "0") + "月";
    elmTitle.innerHTML = title;
}
function updateDays(date) {
    var _a;
    var dateList = [];
    var classList = [];
    //当月の日数を求める
    var thisDays = getMonthDays(date);
    //当月の１日より左側に表示する日数を求める
    var prevDays = getFirstDayOfWeek(date);
    //前月の末日を求める
    var prevLastDate = getPrevMonthDays(date);
    //当月の表示に必要な行数を求める
    var rows = Math.ceil((thisDays + prevDays) / 7);
    //セルの個数だけ繰り返す
    for (var i = 0; i < rows * 7; i++) {
        //i番目のセルが前月の場合
        if (i < prevDays) {
            dateList.push(prevLastDate - prevDays + 1 + i);
            classList.push("cal_day cal_day--prev");
        }
        else if (prevDays <= i && i < prevDays + thisDays) {
            dateList.push(i - prevDays + 1);
            if (i % 7 == 0) {
                classList.push("cal_day cal_day--sun");
            }
            else if (i % 7 == 6) {
                classList.push("cal_day cal_day--sat");
            }
            else {
                classList.push("cal_day");
            }
            //i番目のセルが翌月の場合
        }
        else {
            dateList.push(i - (prevDays + thisDays) + 1);
            classList.push("cal_day cal_day--next");
        }
    }
    //HTMLを格納する変数
    var html = "";
    //セルの個数だけ繰り返す
    for (var i = 0; i < rows * 7; i++) {
        if (i % 7 == 0) {
            html += "<tr>";
        }
        html += '<td class="' + classList.shift() + '">' + ((_a = dateList.shift()) === null || _a === void 0 ? void 0 : _a.toString()) + "</td>";
        if (i % 7 == 6) {
            html += "</tr>";
        }
    }
    elmDays.innerHTML = html;
}
function getMonthDays(date) {
    var lastDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    lastDay.setMonth(lastDay.getMonth() + 1);
    lastDay.setDate(0);
    var days = lastDay.getDate();
    return days;
}
function getFirstDayOfWeek(date) {
    var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    var day = firstDay.getDay();
    return day;
}
function getPrevMonthDays(date) {
    var prevMonth = new Date(date.getFullYear(), date.getMonth() - 1);
    var days = getMonthDays(prevMonth);
    return days;
}
//padstartにてエラー通知。プログラム自体は動く
