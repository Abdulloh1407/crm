document.querySelectorAll(".toggle-button").forEach((button) => {
  button.addEventListener("click", function () {
    let contents = button.parentElement.querySelectorAll(".content");
    let img = button.querySelector("img");

    // Barcha ochilgan bo‘limlarni yopamiz
    document.querySelectorAll(".content").forEach((c) => {
      if (!Array.from(contents).includes(c)) {
        c.classList.remove("show");
      }
    });

    // Barcha rasmlarni qayta o‘rniga qaytaramiz
    document.querySelectorAll(".toggle-button img").forEach((i) => {
      if (i !== img) {
        i.classList.remove("rotated");
      }
    });

    // Har bir `.content` elementini ochish yoki yopish
    contents.forEach((content) => {
      content.classList.toggle("show");
    });

    img.classList.toggle("rotated");
  });
});
