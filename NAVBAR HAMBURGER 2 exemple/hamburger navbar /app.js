const button = document.querySelector(".nav-toggle")
const link = document.querySelector(".links")


button.addEventListener("click", funcHam)

function funcHam () {
    // if(link.contains("show-links")){
    //     link.classList.remove("show-links")

    // } else {
    //    link.classList.add("show-links")
    // }
    
    link.classList.toggle("show-links")
}