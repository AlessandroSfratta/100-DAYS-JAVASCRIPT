const btnList = document.querySelectorAll(".btn");
let toastBox = document.getElementById("toastBox");


const Success = '<i class="fa-solid fa-circle-check"></i> "Succesfully submitted"';
const Error = '<i class="fa-solid fa-circle-xmark"></i> "Please fix the error"';
const Invalid = '<i class="fa-solid fa-circle-exclamation"></i> "Invalid input,check agin"';


function showToast(message) {
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = message
    toastBox.appendChild(toast);

    if(message.includes("error")) {
        toast.classList.add("error");
    }    if(message.includes("Invalid")) {
        toast.classList.add("invalid");
    }
    setTimeout(()=> {
        toast.remove()
    },5050);
    
}

