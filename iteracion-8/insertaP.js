
let newP = document.createElement("p");
selectDivs = document.querySelectorAll("div");

newP.textContent = "Voy en medio!";

document.body.insertBefore(newP, selectDivs[1]);
