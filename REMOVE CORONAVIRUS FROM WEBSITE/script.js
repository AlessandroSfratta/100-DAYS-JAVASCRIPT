replaceText(document.body)

function replaceText(element) {
//funzione normale per coprire testo "coronavirus"
if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText)
} else if (element.nodeType === Text.TEXT_NODE) {
    // COPRI CON SPAN NERO LA PAROLA CORONAVIRUS
     if (element.textContent.match(/coronavirus/gi)) {
        const newElement = document.createElement("span")
        newElement.innerHTML = element.textContent.replace(/(coronavirus)/gi,
         '<span style="background-color: black; color: black;">$1</span>')
         element.replaceWith(newElement)
    
   //EFFETTO RAIMBOW BASTA CAMBIARE NOME ALLA CLASSE E USARE SPAN E POI CREARE ANIMAZIONE CON KEYFRAMES STYLE

    //RIMUOVI CONTAINER DI TESTO CON IL CONTENUTO CORONAVIRUS
    //element.parentElement.remove()

    }
}
 // SOSTITUZIONE TESTO    
// element.textContent = element.textContent.replace(/coronavirus/gi,"!!!!!!")
}
