
// var toggler = document.querySelector(".toggle")
// console.log(toggler)
// toggler.addEventListener("click", (e) => {
//     var body = document.querySelector("body")
//     body.classList.add("toggled")
//     e.preventDefault()
// })


$(function(){
    $(".head_inner nav ul li.toggle span").on("click", function(e){
        $("body").toggleClass("toggled")
        e.preventDefault()
    })
})