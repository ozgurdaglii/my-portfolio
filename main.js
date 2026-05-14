document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const images = document.querySelectorAll(".card-img img");
    const closeBtn = document.querySelector(".close");

    // images.forEach(img => {
    //     img.addEventListener("click", function () {
    //         modal.style.display = "block";
    //         modalImg.src = this.src;
    //     });
    // });

    closeBtn.onclick = function () {
        modal.style.display = "none";
    };

    modal.onclick = function (e) {
        if (e.target !== modalImg) {
            modal.style.display = "none";
        }
    };
    console.log("çalıştı");
});