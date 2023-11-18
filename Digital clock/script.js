const hrs = document.getElementById("hrs")
const min = document.getElementById("min")
const sec = document.getElementById("sec")
let currentT  



setInterval(() => {
    currentT = new Date(); 
    hrs.innerHTML = (currentT.getHours()<10 ? "0" : "") + currentT.getHours()
    min.innerHTML = (currentT.getMinutes()<10 ? "0" : "") + currentT.getMinutes()
    sec.innerHTML = (currentT.getSeconds()<10 ? "0" : "") + currentT.getSeconds()
}, 1000)


