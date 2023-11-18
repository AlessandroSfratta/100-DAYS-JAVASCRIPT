let count = 0 

const values = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")
const saveBtn = document.querySelector(".save"); const saveC = document.querySelector(".salva"); const saveP = document.querySelector(".salvato")


function save(content, value) {
    const createE = document.createElement("p")
    createE.classList.add("salvato");
    content.appendChild(createE)

   const newD = new Date()
   const getH = newD.getHours().toString().padStart(2, "0")
   const getM = newD.getMinutes().toString().padStart(2, "0")
   const getS = newD.getSeconds().toString().padStart(2, "0")

    createE.innerText = `TIME= ${getH}:${getM}:${getS} COUNT= ${value}`
}


btns.forEach( (btn) => {
    btn.addEventListener("click", (e) => {
         switch(e.currentTarget.classList[1]){
            case "decrease": count--;break 
            case "increase": count++;break 
               case "reset": count = 0; break 
               case "save": save(saveC, count)
         }

         switch(count) {
        case 0: values.style.color= "#222"; break;
        case 1: values.style.color = "green"; break;
       case -1: values.style.color = "red"; break;
         }

        values.textContent = count
    })
})
