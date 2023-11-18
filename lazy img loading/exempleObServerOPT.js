const blurredDiv = document.querySelector(".blurred-img");
const imgT = document.querySelector("img")

const lazyLoad = target => {
    const io = new IntersectionObserver( ( entries, observer ) => {
entries.forEach( entry => {
    console.log("😍");
    if (entry.isIntersecting) {
       const img = entry.target
       const src = img.getAttribute("data-lazy");

       img.setAttribute("src", src)
       img.classList.add("addclass")

       observer.disconnect()

    }

  })
})
io.observe(target)
}

imgT.forEach(lazyLoad);





function loaded() {
 blurredDiv.classList.add("loaded")
}

if (img.complete) {
    loaded()
} else {
    img.addEventListener("load", loaded)
}


