const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

let newUl = document.createElement("ul");

for (const app of apps)
{
    let newLi = createElement("li");
    newLi.textContent = app;
    newUl.appendChild(newLi);
}