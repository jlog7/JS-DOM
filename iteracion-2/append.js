//2.1 Inserta dinamicamente en un html un div vacio con javascript
let createDiv = document.createElement("div");
document.body.appendChild(createDiv);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript
let createDiv = document.createElement("div");
let createP = document.createElement("p");

createDiv.appendChild(createP);
document.body.appendChild(createDiv);

//2.3 Inserta dinamicamente en html un div que contenga 6 p
let createDiv = document.createElement("div");

document.body.appendChild(createDiv);

for (let i=0; i<6; i++)
{
    let sixP = create.createElement("p");
    createDiv.appendChild(sixP);
}

//2.4 Inserta con javascript en un html una p con el texto 'Soy dinamico'
let createP = document.createElement("p");
createP.textContent ="Soy dinamico";
document.body.appendChild(createP);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
let h2Element = document.querySelector(".fn-insert-here");
h2Element.textContent = "Wubba Lubba dub dud";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement("ul");

for (const app of apps)
{
    let newLi = createElement("li");
    newLi.textContent = app;
    newUl.appendChild(newLi);
}

document.body.appendChild(newUl);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
let eraseElements = document.querySelectorAll(".fn-remove-me");
for (const element of eraseElements) {
    element.remove();
}

