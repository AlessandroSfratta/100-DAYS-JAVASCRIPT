let menu

fetch('menu.json')
  .then((response) => response.json())
  .then((data) => {
     menu = data; // Salva il JSON nell'array "menu"
    
     displayMenuItems(menu)  
     displayMenuButtons() })

  .catch((error) => {
    console.error('Si è verificato un errore durante il caricamento dei dati JSON:', error);
  });

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container")



function displayMenuItems (menuItems) {
  let displayMenu = menuItems.map( (item) => {
    // console.log(item);

    return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}


function displayMenuButtons () {

  const categories = menu.reduce( (values, item) => {
   
    if (!values.includes(item.category)) {
       values.push(item.category) }
 
  return values
 
   },["all"])
 
    const categoryBtn = categories.map( (category) => {
   return `<button class= "filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("")
    btnContainer.innerHTML = categoryBtn
    const filterBtns = btnContainer.querySelectorAll(".filter-btn")
 
 
 filterBtns.forEach( (btn) => {
   btn.addEventListener("click", (e) => {
     const category = e.currentTarget.dataset.id; 
     const menuCategory = menu.filter( (menuItem) => {
 if (menuItem.category === category) {
   return menuItem
 }
   });
     if (category === "all") {
       displayMenuItems(menu)
     } else {
       displayMenuItems(menuCategory)
     }
   })
 })


}