const strengthMeter = document.getElementById("strength-meter")
const passwordInput = document.getElementById("password-input")
const reasonsContainer = document.getElementById("reasons")


passwordInput.addEventListener("input", updateStrengthMeter)
updateStrengthMeter()

function updateStrengthMeter(){
    const weaknesses = calculatePasswordStrenght(passwordInput.value)
    console.log(weaknesses)

    let strength = 100
    reasonsContainer.innerHTML = ''
    weaknesses.forEach(weakness => {
        if (weakness == null) return
        strength -= weakness.deduction
        const messageElement = document.createElement("div")
        messageElement.innerHTML = weakness.message
        reasonsContainer.appendChild(messageElement)
    })
    strengthMeter.style.setProperty("--strength", strength)
}

function calculatePasswordStrenght(password){
    const weaknesses = []
    weaknesses.push(lengthWeakness(password))
    weaknesses.push(lowercaseWeakness(password))
    weaknesses.push(uppercaseWeakness(password))
    weaknesses.push(numberWeakness(password))
    weaknesses.push(specialCharactersWeakness(password))
    weaknesses.push(repeatCharactersWeakness(password))
    return weaknesses
   
}

function lengthWeakness(password) {
    const length = password.length

    if(length <= 4){
        return {
            message: "La tua password è troppo corta!!!",
            deduction: 40
        }
    }
   
    if(length <= 7){
        return {
            message: "Sarebbe meglio inserire qualche carattere in più",
            deduction: 15
        }
    }

}

function uppercaseWeakness(password) {
    return characterTypeWeakness(password, /[A-Z]/g, 'lettere maiuscole')
  }
  
  function lowercaseWeakness(password) {
    return characterTypeWeakness(password, /[a-z]/g, 'lettere minuscole')
  }
  
  function numberWeakness(password) {
    return characterTypeWeakness(password, /[0-9]/g, 'numeri')
  }
  
  function specialCharactersWeakness(password) {
    return characterTypeWeakness(password, /[^0-9a-zA-Z\s]/g, 'caratteri speciali')
  }

  function characterTypeWeakness(password, regex, type) {
    const matches = password.match(regex) || []
  
    if (matches.length === 0) {
      return {
        message: `La tua password non ha ${type}`,
        deduction: 20
      }
    }
  
    if (matches.length <= 1) {
      return {
        message: `La tua password usa pochi ${type}`,
        deduction: 5
      }
    }
  }


  function repeatCharactersWeakness(password) {
  const matches = password.match(/(.)\1/g) || []
  if (matches.length > 2) {
    return {
      message: 'La tua password ripete i caratteri',
      deduction: matches.length * 10
    }
  }
}