/*practice1
var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!'
    }
})
*/
/*practice2
var vm = new Vue({
    el:"#app",
    data:{
        name:"Recursion",
        year: 2020,
        thisYear: new Date().getFullYear(),
        ok:false
    }
})
*/
/*practice3
var vm = new Vue({
    el:"#app",
    data:{
        title:"<h1>Title</h1>",
        name:"Recursion",
        url: "https://recursionist.io/"
    },
    directives:{
        focus:{
            inserted:function(el){
                el.focus()
            }
        }
    }
})
*/
//practice4
var vm = new Vue({
    el:"#app",
    data:{
        message: "",
        checked: true,
        checkedCourse: [],
        picked: "",
        selected: "",
        options: [
            "Frontend Engineer",
            "Backend Engineer",
            "Fullstack Engineer"
        ],
    },
})