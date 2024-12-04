
export function controlModal () {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector(".modal-open");
    const closeModalBtn = document.querySelector(".modal-close");

    const openModal = function() {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    openModalBtn.addEventListener("click", openModal);

    const closeModal = function() {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    }

    closeModalBtn.addEventListener("click", closeModal);
}


