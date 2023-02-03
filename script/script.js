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

    // Maak verwijder-icoon
    let trashIcon = document.createElement("IMG");
    trashIcon.setAttribute('src', 'img/trashcan.png');
    trashIcon.addEventListener("click", () => removeItem(listItem));

    // Maak checkbox
    let checkbox = document.createElement("input");
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'check');
    
    // Controleert of de checkbox 'aan' of 'uit' staat. Bij verandering wissel van class
    checkbox.addEventListener("change", function(e) {
        if (this.checked) {
            listItem.classList.add("checked");
        } else {
            listItem.classList.remove("checked");
        }
    });

    let listItem = document.createElement("li");
    listItem.append(trashIcon, checkbox, inputField.value);
    
    items.append(listItem);
};

// Functie om item van lijst te verwijderen
function removeItem(listItem){
    let confirmRemove = confirm("Verwijderen?")
    if (confirmRemove == true){
        items.removeChild(listItem);
        //listItem.innerHTML ="";
    }
};


// Voeg samen
input.append(inputField, inputButton);