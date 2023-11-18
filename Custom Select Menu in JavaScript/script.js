const wrapper = document.querySelector(".wrapper")
const selectBtn = wrapper.querySelector(".select-btn")
const options = wrapper.querySelector(".options")
const searchInp = wrapper.querySelector("input")



let countries = ["Afghanistan", "Algeria", "Argentina", "Australia", "Bangladesh", "Belgium", "Bhutan",
"Thailand", "Turkey", "Uganda", "Ukraine", "United States", "United Kingdom", "Vietnam"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let liC = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", liC);
    })
}
addCountry();

function updateName(selectedLi){
    searchInp.value = "";
    addCountry(selectedLi.innerText)
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

selectBtn.addEventListener("click", () => {
    wrapper.classList.toggle("active");
})


searchInp.addEventListener("keyup", () => {
    let arr = [];
    let searchedVal = searchInp.value.toLowerCase(); 

    arr = countries.filter(data => {
        return data.toLowerCase().startsWith(searchedVal)
    }).map(data => `<li onclick= "updateName(this)">${data}</li>`).join("");
    options.innerHTML = arr ? arr : `<p>Oops! Country not found!</p>`;
});