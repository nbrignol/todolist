var items = [];

displayItemCounter(items.length);

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
	
	displayItemCounter(items.length);
	displayOneMoreItem(newItem);
})