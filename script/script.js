const container = document.getElementById("container");
const input = document.getElementById("input");
const list = document.getElementById("list");
const items = document.getElementById("items");

// Invoerveld

const inputField = document.createElement("input");
inputField.classList.add("input-field");
inputField.setAttribute('type', 'text');

// Verzendknop

const inputButton = document.createElement("button");
inputButton.innerText = "Voeg toe";
inputButton.addEventListener("click", () => addItem());

// Functie om item aan lijst toe te voegen

function addItem(){
    let checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'check');
    
    let listItem = document.createElement("li");
    listItem.append(checkbox, inputField.value);
    
    items.append(listItem);
};

// Voeg samen

input.append(inputField, inputButton);