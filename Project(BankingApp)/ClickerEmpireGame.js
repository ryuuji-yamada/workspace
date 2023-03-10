const config = {
    initialPage: document.getElementById("initialPage"),
    mainPage: document.getElementById("mainPage")
}

class User{
    constructor(name, age, days, money, items){
        this.name = name;
        this.age = age;
        this.days = days;
        this.money = money;
        this.clickCount = 0;
        this.incomePerClick = 25;
        this.incomePerSec = 0;
        this.stock = 0;
        this.items = items;
    }
}

/*
class Items{

}
*/

class View{
    static createInitialPage(){
        let container = document.createElement("div");
        container.classList.add("vh-100", "d-flex", "justify-content-center", "align-items-center");
        container.innerHTML =
        `
        <div class="bg-white text-center p-4">
            <h2 class="pb-3">Clicker Empire Game</h2>
            <form>
                <div class="form-row pb-3">
                    <div class="col">
                        <input type="text" class="form-control" placeholder="Your name">
                    </div>
                </div>
            </form>
            <div class="d-flex justify-content-between">
                <div class="col-6 pl-0">
                    <button type="submit" class="btn btn-primary col-12" id="newGame">New</button>
                </div>
                <div class="col-6 pr-0">
                    <button type="submit" class="btn btn-primary col-12" id="login">Login</button>
                </div>
            </div>
        </div>
        `;
        return config.initialPage.append(container);//<div id="initialPage">の中にcontainerの内容を入れ込む
    }
    static createMainPage(){
        let container = document.createElement("div");
        container.innerHTML =/*displayItems/reset/save*/
        `
        <div class="d-flex justify-content-center p-md-5 pb-5" style='height:100vh;'>
            <div class="bg-navy p-2 d-flex col-md-11 col-lg-10">
                <div class="bg-dark p-2 col-4" id="burgerStatus">
                </div>
                <div class= "col-8">
                    <div class= "p-1 bg-navy" id="userInfo">  
                    </div>
                    <div class="bg-dark mt-2 p-1 overflow-auto flowHeight" id="displayItems">
                    </div>
                    
                    <div class="d-flex justify-content-end mt-2">
                        <div class="border p-2 mr-2 hover" id="reset">
                            <i class="fas fa-undo fa-2x text-white"></i>
                        </div>
                        <div class="border p-2 hover" id="save">
                            <i class="fas fa-save fa-2x text-white"></i>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
        `
        container.querySelectorAll("#burgerStatus")[0].append(View.createBurgerStatus());//burgerStatus作成
        container.querySelectorAll("#userInfo")[0].append(View.createUserInfo());//userInfo作成
        container.querySelectorAll("#displayItems")[0].append(View.createItemsPage());//displayItems作成
        return container;
    }

    static createBurgerStatus(){
        let container = document.createElement("div");
        container.innerHTML =
        `
        <div class="bg-navy text-white text-center">
            <h5>sample Burgers</h5>
            <p>one click ￥sample </p>
        </div>
        <div class="p-2 pt-5 d-flex justify-content-center">
            <img src="https://cdn.pixabay.com/photo/2014/04/02/17/00/burger-307648_960_720.png" width=80% class="py-2 hover img-fuid" id="burger">
        </div>
        `
        let burgerClick = container.querySelectorAll("#burger")[0];
        return container;
    }

    static createUserInfo(){
        let container = document.createElement("div");
        container.classList.add("d-flex", "flex-wrap", "p-1");
        container.innerHTML =
        `
        <div class="text-white text-center col-12 col-sm-6 userInfoBorder">
            <p>sample.name</p>
        </div>
        <div class="text-white text-center col-12 col-sm-6 userInfoBorder">
            <p>sample.years old</p>
        </div>
        <div class="text-white text-center col-12 col-sm-6 userInfoBorder">
            <p>sample.days</p>
        </div>
        <div class="text-white text-center col-12 col-sm-6 userInfoBorder">
            <p>￥sample.money</p>
        </div>
        `
        return container;
    }

    static createItemsPage(){
        let container = document.createElement("div");
        container.innerHTML =
        `
        <div class="text-white d-sm-flex align-items-center m-1 selectItem">
                <div class="d-none d-sm-block p-1 col-sm-3">
                    <img src="https://cdn.pixabay.com/photo/2019/06/30/20/09/grill-4308709_960_720.png" class="img-fluid">
                </div>
                <div class="col-sm-9">
                    <div class="d-flex justify-content-between">
                        <h4>sample.name</h4>
                        <h4>sample.currentAmount</h4>
                    </div>
                    <div class="d-flex justify-content-between">
                        <p>￥sample.price</p>
                        <p class="text-success">￥後で考える</p>
                    </div>
                </div>                      
            </div>
        `;
        return container;
    }
}

class Controller{
    //timer;

    static startGame(){
        View.createInitialPage();
        let newGameBtn = config.initialPage.querySelectorAll("#newGame")[0];
        newGameBtn.addEventListener("click",function(){
            Controller.moveInitialToMain();
        });
        let loginBtn = config.initialPage.querySelectorAll("#login")[0];
        loginBtn.addEventListener("click",function(){
            Controller.moveInitialToMain();
        });
    }

    static moveInitialToMain(){
        config.initialPage.classList.add("d-none");//initialPageを非表示にする
        config.mainPage.append(View.createMainPage());//mainPage作成
    }
}

Controller.startGame();