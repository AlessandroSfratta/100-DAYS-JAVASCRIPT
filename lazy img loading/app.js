const blurredDiv = document.querySelector(".blurred-img");
const img = document.querySelector("img")

function loaded() {
 blurredDiv.classList.add("loaded")
}

if (img.complete) {
    loaded()
} else {
    img.addEventListener("load", loaded)
}


