
console.log("Yeh sab kiya dekhna prha ha");
let menu = document.getElementById("menu");
let dropdown = document.getElementById("dropdown-navbar");

menu.addEventListener("click", () => {
    dropdown.classList.toggle("clicked");
})

let contact = document.getElementById("contact");
contact.addEventListener("click", () => {
    window.location.assign('Contact/index.html');
});
