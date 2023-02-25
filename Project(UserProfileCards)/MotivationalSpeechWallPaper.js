class WallPaper {
    constructor (text,colorCode,imgUrl,vertical, horizontal) {
        this.text = text;
        this.colorCode = colorCode;
        this.imgUrl = imgUrl;
        this.vertical = vertical;
        this.horizontal = horizontal;
    }

    verticalTable = {
        "top" : "align-items-start",
        "center" : "align-items-center",
        "bottom" : "align-items-end"
    }

    horizontalTable = {
        "left" :  "justify-content-start",
        "center" :  "justify-content-center",
        "right" :  "justify-content-end",
    }

    generateWallPaper() {
        let domObj = document.getElementById("target");
        let container = document.createElement("div");
        container.classList.add("container", "d-flex", "justify-content-center");

        container.innerHTML = 
        `
            <div class="vh-75 p-md-5 p-3 my-5 col-md-8 col-12 d-flex imgBackground ${this.horizontalTable[this.horizontal]} ${this.verticalTable[this.vertical]}" style="background-image: url('${this.imgUrl}');">
                <div class="col-8">
                    <h3 class="paperText" style="color:#${this.colorCode}";>${this.text}</h3>
                </div>
            </div>
        `
        domObj.append(container);
        return domObj;
    }
}

class helperFunction {
    static showAll(paperList) {
        for (let i = 0; i < paperList.length; i++) {
            paperList[i].generateWallPaper();
        }
    } 
}

let wallPaper1 = new WallPaper ("Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away. - Antoine de Saint", "1B4F72", "https://cdn.pixabay.com/photo/2020/06/12/03/06/magnifying-glass-5288877__340.jpg", "top", "right");

let wallPaper2 = new WallPaper ("The scientist discovers a new type of material or energy and the engineer discovers a new use for it. - Gordon Lindsay Glegg", "007bff", "https://cdn.pixabay.com/photo/2018/02/23/04/38/laptop-3174729_1280.jpg", "center", "left")

let wallPaper3 = new WallPaper ("Scientists study the world as it is, engineers create the world that never has been. - Theodore von Karman", "ecf0f1", "https://cdn.pixabay.com/photo/2017/05/10/19/29/robot-2301646_1280.jpg", "center", "center");

let wallPaperList = [wallPaper1, wallPaper2, wallPaper3];
helperFunction.showAll(wallPaperList);