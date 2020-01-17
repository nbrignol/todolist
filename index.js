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
	displayOneMoreItem(items[i]);
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
	counterElement.innerHTML = items.length;

	displayOneMoreItem(newItem);
})