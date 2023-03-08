function displayNone(ele){//追加
    ele.classList.remove("d-block");
    ele.classList.add("d-none");
}

function displayBlock(ele){//追加
    ele.classList.remove("d-none");
    ele.classList.add("d-block");
}

const config = {
    initialForm: document.getElementById("initial-form"),
    bankPage: document.getElementById("bankPage"),
    //追加
    sidePage: document.getElementById("sidePage")
}

class BankAccount{
    constructor(firstName,lastName,email,type,accountNumber,money){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.type = type;
        this.accountNumber = accountNumber;
        this.money = money;
        this.initialDeposit = money;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

function getRandomInteger(min,max){
    return Math.floor(Math.random()*(max-min))+min;
}

//submit舌情報からインスタンスを作成する関数
function initializeUserAccount(){
    const form = document.getElementById("bank-form");
    let userBankAccount = new BankAccount(
        form.querySelectorAll(`input[name="userFirstName"]`).item(0).value,
        form.querySelectorAll(`input[name="userLastName"]`).item(0).value,
        form.querySelectorAll(`input[name="userEmail"]`)[0].value,
        form.querySelectorAll(`input[name="userAccountType"]:checked`).item(0).value,
        getRandomInteger(1, Math.pow(10,8)),
        // int型として渡します。
        parseInt(form.querySelectorAll(`input[name="userFirstDeposit"]`).item(0).value)
    );
    console.log(userBankAccount);

    //1ページ目非表示
    config.initialForm.classList.add("d-none");//initialForm => configにてid="initial-form"のHTML要素を取得している

    //2ページ目の呼び出し
    config.bankPage.append(mainBankPage(userBankAccount));//bankPage => configにてid="bankPage"のHTML要素を取得している
}

function mainBankPage(bankAccount){
    let infoCon = document.createElement("div");
    infoCon.classList.add("pb-2", "pb-md-4", "text-right");

    let nameP = document.createElement("p");
    nameP.classList.add("py-1");

    //namePと全く同じクラスを持っているのでコピー
    let bankIdP = nameP.cloneNode(true);
    let initialDepositP = nameP.cloneNode(true);

    //オブジェクトの情報を挿入
    nameP.innerHTML = bankAccount.getFullName();
    bankIdP.innerHTML = bankAccount.accountNumber;
    initialDepositP.innerHTML = bankAccount.initialDeposit;

    infoCon.append(nameP,bankIdP,initialDepositP);
    
    let balanceCon = document.createElement("div");
    balanceCon.classList.add("d-flex", "bg-danger", "py-1", "py-md-2");

    balanceCon.innerHTML =
    `
        <p class="col-8 text-left rem1p5">Available Balance</p>
        <p class="col-4 text-right rem1p5">$${bankAccount.money}</p>
    `;

    let menuCon = document.createElement("div");
    menuCon.classList.add("d-flex", "justify-content-center", "flex-wrap", "text-center", "py-3", "mx-0");

    menuCon.innerHTML =
    `
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="withdrawBtn" class="bg-blue hover p-3">
                <h5>WITHDRAWAL</h5>
                <i class="fas fa-wallet fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="depositBtn" class="bg-blue hover p-3">
                <h5>DEPOSIT</h5>
                <i class="fas fa-coins fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div id="comeBackLaterBtn" class="bg-blue hover p-3">
                <h5>COME BACK LATER</h5>
                <i class="fas fa-home fa-3x"></i>
            </div>
        </div>
    `;

    //withdrawボタンがクリックされたらwithdrawController関数を実行=>withdrawページを表示
    menuCon.querySelectorAll("#withdrawBtn")[0].addEventListener("click",function(){
        withdrawController(bankAccount);
    });
    menuCon.querySelectorAll("#depositBtn")[0].addEventListener("click",function(){
        alert("deposit");
    });
    menuCon.querySelectorAll("#comeBackLaterBtn")[0].addEventListener("click",function(){
        alert("come back later");
    });

    let container = document.createElement("div");
    container.append(infoCon,balanceCon,menuCon);

    return container;
}

function billInputSelector(title){//Page3.htmlの内容の一部を作成する関数
    let container = document.createElement("div");
    container.innerHTML = 
    `
    <h2 class="pb-3">${title}</h2>
        <div class="form-group row">
            <label for="moneyWithdraw100" class="col-2 col-form-label col-form-label-sm">$100</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="100" id="moneyWithdraw100" placeholder="5">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw50" class="col-2 col-form-label col-form-label-sm">$50</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="50" id="moneyWithdraw50" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw20" class="col-2 col-form-label col-form-label-sm">$20</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="20" id="moneyWithdraw20" placeholder="2">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw10" class="col-2 col-form-label col-form-label-sm">$10</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="10" id="moneyWithdraw10" placeholder="3">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw5" class="col-2 col-form-label col-form-label-sm">$5</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="5" id="moneyWithdraw5" placeholder="1">
            </div>
        </div>
        <div class="form-group row">
            <label for="moneyWithdraw1" class="col-2 col-form-label col-form-label-sm">$1</label>
            <div class="col-10">
                <input type="number" class="form-control form-control-sm text-right withdraw-bill bill-input" data-bill="1" id="moneyWithdraw1" placeholder="4">
            </div>
        </div>
        <div class="text-center money-box p-3">
            <p id="withdrawTotal">$0.00</p>
        </div>
    `;
    return container;
}

function backNextBtn(backString,nextString){
    let container = document.createElement("div");
    container.innerHTML =
    `
    <div class="d-flex","justify-content-between">
        <div class="col-6 pl-0">
            <button class="btn btn-outline-primary col-12 back-btn">${backString}</button>
        </div>
        <div class="col-6 pr-0">
            <button class="btn btn-primary col-12 next-btn">${nextString}</button>
        </div>
    </div>
    `
    return container;
}

function withdrawController(bankAccount){
    displayNone(config.bankPage);
    displayBlock(config.sidePage);
    //新しい情報をレンダリングするため、ページを空にする
    config.bankPage.innerHTML = "";
    config.sidePage.innerHTML = "";
    config.sidePage.append(withdrawPage(bankAccount));
}

function withdrawPage(bankAccount){
    let container = document.createElement("div");
    container.classList.add("p-5");

    let withdrawContainer = document.createElement("div");
    container.append(withdrawContainer);

    withdrawContainer.append(billInputSelector("Please Enter The Withdrawal Amount"));
    withdrawContainer.append(backNextBtn("back","next"));

    let backBtn = withdrawContainer.querySelectorAll(".back-btn").item(0);

    backBtn.addEventListener("click",function(){
        displayNone(config.sidePage);
        displayBlock(config.bankPage);
        config.bankPage.append(mainBankPage(bankAccount));
    });

    let billInputs = withdrawContainer.querySelectorAll(".bill-input");

    for(let i = 0; i < billInputs.length; i++){
        billInputs[i].addEventListener("change",function(event){
            document.getElementById("withdrawTotal").innerHTML =
            billSummation(billInputs,"data-bill").toString();
        });
    }

    let nextBtn = withdrawContainer.querySelectorAll(".next-btn").item(0);
    nextBtn.addEventListener("click",function(){
        container.innerHTML = '';//今のページを空にする

        let confirmDialog = document.createElement("div");
        confirmDialog.append(billDialog("The money you are going to take is ...",billInputs,"data-bill"));
        container.append(confirmDialog);
    });

    return container;
}

function billSummation(inputElementNodeList,multiplierAttribute){
    let summation = 0;
    for(let i = 0; i < inputElementNodeList.length; i++){
        let currEle = inputElementNodeList[i];
        let value = parseInt(currEle.value);

        if(currEle.hasAttribute(multiplierAttribute)) value *= parseInt(currEle.getAttribute(multiplierAttribute));
        if(value > 0) summation += value;
    }
    return summation;
}

function billDialog(title,inputElementNodeList,multiplierAttribute){
    let container = document.createElement("div");

    let billElements = '';
    for(let i = 0; i < inputElementNodeList.length; i++){
        let value = parseInt(inputElementNodeList[i].value);

        //入力された値が0より大きい時、HTMPとして表示
        if(value > 0){
            let bill = "$" + inputElementNodeList[i].getAttribute(multiplierAttribute);
            billElements += `<p class="rem1p3 calculation-box mb-1 pr-2">${value} × ${bill}</p>`;
        }
    }

    //totalはbillSumationで計算
    let totalString = `<p class="rem1p3 pr-2">total: $${billSummation(inputElementNodeList, multiplierAttribute)}</p>`;

    container.innerHTML = 
    `
    <h2 class="pb-1">${title}</h2>
        <div class="d-flex justify-content-center">
            <div class="text-right col-8 px-1 calculation-box">
                ${billElements}
                ${totalString}
            </div>
        </div>
    `
    return container;
}