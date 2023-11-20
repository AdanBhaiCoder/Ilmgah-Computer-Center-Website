console.log("Yeh sab kiya dekhna prha ha");
let menu = document.querySelector("#menu");
let dropdown = document.querySelector("#dropdown-navbar");

menu.addEventListener("click", () => {
    dropdown.classList.toggle("clicked");
})

let contact = document.querySelector("#contact");
contact.addEventListener("click", () => {
    window.location.assign('Contact/index.html');
});
