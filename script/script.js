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
    
    checkbox.addEventListener("change", function(e){
        if (this.checked) {
            listItem.classList.add("checked");
            console.log("i am checked " + listItem.classList);
        } else {
            listItem.classList.remove("checked")
            console.log("i am not checked " + listItem.classList);
        }
    });

    
    
    items.append(listItem);
};

// Voeg samen

input.append(inputField, inputButton);