const button = document.querySelector(".button");
const checkbox = document.getElementById("checkbox");
const boxContainer = document.querySelector(".box-container");

button.addEventListener("click", () => {
  checkbox.checked = !checkbox.checked;
  button.classList.toggle("checked", checkbox.checked);
  boxContainer.style.display = checkbox.checked ? "flex" : "none"; // Boxlarni ko‘rsatish yoki yashirish
});
