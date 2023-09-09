document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector(".modal");
    const openButton = document.querySelector(".get-started");
    const closeButton = document.querySelector(".close-button");

    openButton.addEventListener("click", () => {
      modal.showModal();
    });
    closeButton.addEventListener("click", () => {
      modal.close();
    });
});