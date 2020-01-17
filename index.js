var items = [
	{
		label: "Acheter des légumes"
	},

	{
		label: "Faire du Javascript"
	},

	{
		label: "Faire un peu de PHP"
	}
];

var counterElement = document.querySelector(".counter .number");
counterElement.innerHTML = items.length;

var parentElement = document.querySelector(".items");
parentElement.innerHTML = "";

for(var i = 0; i < items.length; i++){
	var newLi = document.createElement("li");
	newLi.classList.add("item");
	newLi.innerHTML = items[i].label;

	var newA = document.createElement("a");
	newA.setAttribute("href", "#")
	newA.innerHTML = "Supprimer";

	newLi.appendChild(newA);
	parentElement.appendChild(newLi);

}

var formElement = document.querySelector(".formNewItem");
formElement.addEventListener("submit", function(event){
	event.preventDefault();

	var inputElement = document.querySelector(".formNewItem input[name=newItem]");
	var newItem = {
		label: inputElement.value
	};

	inputElement.value = "";

	items.push(newItem);

	var newLi = document.createElement("li");
	newLi.classList.add("item");
	newLi.innerHTML = newItem.label;

	var newA = document.createElement("a");
	newA.setAttribute("href", "#")
	newA.innerHTML = "Supprimer";

	newLi.appendChild(newA);
	parentElement.appendChild(newLi);


})