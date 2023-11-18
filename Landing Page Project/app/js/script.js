const btnHamburger = document.querySelector("#btnHamburger")
const bodyBlock = document.querySelector("body")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade")



btnHamburger.addEventListener("click",  function() {

if(header.classList.contains("open")) {
    bodyBlock.classList.remove("noscroll")
    //close menu
    header.classList.remove("open")
    fadeElems.forEach( (ele) => { //menu mobile visibility
        ele.classList.remove("fade-in")
        ele.classList.add("fade-out")
    })

} else { //open hamburger menu
    bodyBlock.classList.add("noscroll")
    header.classList.add("open")
    fadeElems.forEach( (ele) => { //menu mobile visibility
        ele.classList.remove("fade-out")
        ele.classList.add("fade-in")
    })

}

})