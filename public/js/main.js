// var page = document.querySelector(".page");
// var checkbox = document.querySelector('input[type="checkbox"]');
// checkbox.addEventListener("change", function() {
//   if (checkbox.checked) {
//     page.classList.toggle("dark-theme");
//     console.log("Checked");
//   } else {
//     page.classList.toggle("light-theme");
//     console.log("Not checked");
//   }
// });

const page = document.querySelector(".page");
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener("change", () => {
  checkbox.checked
    ? page.classList.remove("light-theme")
    : page.classList.add("light-theme");
});
