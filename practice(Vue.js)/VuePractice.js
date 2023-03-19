/*practice1
var app = new Vue({
    el:'#app',
    data:{
        message:'Hello Vue!'
    }
})
*/

var vm = new Vue({
    el:"#app",
    data:{
        name:"Recursion",
        year: 2020,
        thisYear: new Date().getFullYear(),
        ok:false
    }
})