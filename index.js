let openBtn = document.getElementById("modal-btn");
let modalContainer = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

openBtn.addEventListener("click", () => {
   modalContainer.style.display = "block";
})

closeBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
})

window.addEventListener("click", (event) => {
    if (event.target === modalContainer) {
        modalContainer.style.display = "none";
    }
})