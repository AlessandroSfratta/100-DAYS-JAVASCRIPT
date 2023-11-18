const btnEl = document.getElementById("btn"); 
const birthdayEl = document.getElementById("birthday"); 
const resultEl = document.getElementById("result");



function calculateAge () {
   const birthdayValue = birthdayEl.value;
   if(birthdayValue === ""){
    alert("Per piacere insierisci la tua data di nascita")
   } else {
    let age = getAge(birthdayValue);
    resultEl.innerText = `Ecco la tua età ${age} ${age > 1? "anni" : "anno"}`
   }
}

function getAge(birthdayValue){ 
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    const age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();

    if(month<0 || (month === 0 && currentDate.getDate() < birthdayDate.getDate())){
      age--
    } 
        return age
}

btnEl.addEventListener("click",calculateAge)