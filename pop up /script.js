const openModalBu = document.querySelectorAll("[data-modal-target]");
const closeModalBu = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalBu.forEach(bottone => {
    bottone.addEventListener("click", () => {
      const modal = document.getElementsByClassName(bottone.dataset.modalTarget);
    //const modal = document.getElementsByClassName(".modal");
      fOpenModal(modal);
    });
  });
  
  closeModalBu.forEach(bottone => {
    bottone.addEventListener("click", () => {
      const modal = bottone.closest(".modal");
      fCloseModal(modal);
    });
  });

function fOpenModal(mod){
  if (mod === null) return 
  modal.classList.add("active");
  overlay.classList.add("active");
  console.log("funziona")
}

function fCloseModal(mod){
    if (mod === null) return 
    modal.classList.remove("active");
    overlay.classList.remove("active");
    console.log("x")
  }