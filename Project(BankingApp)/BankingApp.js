const config = {
    initialForm: document.getElementById("initial-form"),
    bankPage: document.getElementById("bankPage")
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
            <div class="bg-blue hover p-3">
                <h5>WITHDRAWAL</h5>
                <i class="fas fa-wallet fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div class="bg-blue hover p-3">
                <h5>DEPOSIT</h5>
                <i class="fas fa-coins fa-3x"></i>
            </div>
        </div>
        <div class="col-lg-4 col-12 py-1 py-md-3 px-0 px-md-1">
            <div class="bg-blue hover p-3">
                <h5>COME BACK LATER</h5>
                <i class="fas fa-home fa-3x"></i>
            </div>
        </div>
    `;

    let container = document.createElement("div");
    container.append(infoCon,balanceCon,menuCon);

    return container;
}