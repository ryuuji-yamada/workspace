const config = {
    initialPage: document.getElementById("initialPage"),
    //mainPage: document.getElementById("mainPage")
}

/*
class User{

}

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
}

class Controller{
    //timer;

    static startGame(){
        View.createInitialPage();
        let newGameBtn = config.initialPage.querySelectorAll("#newGame")[0];
        newGameBtn.addEventListener("click",function(){
            alert("newGameBtn!");
        });
        let loginBtn = config.initialPage.querySelectorAll("#login")[0];
        loginBtn.addEventListener("click",function(){
            alert("loginBtn!!");
        });
    }
}

Controller.startGame();