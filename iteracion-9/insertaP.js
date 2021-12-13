let selectClass = document.querySelectorAll(".fn-insert-here");

for (const singleClass of selectClass) {
    let newPInside = document.createElement("p");
    newPInside.textContent = "Voy dentro!"

    singleClass.appendChild(newPInside);
}