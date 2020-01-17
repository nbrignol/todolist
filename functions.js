function displayOneMoreItem(item){
	var newLi = document.createElement("li");
	newLi.classList.add("item");
	newLi.innerHTML = item.label;

	if (item.deleted) {
		newLi.classList.add("deleted");
	}

	if (item.isImportant) {
		newLi.classList.add("important");
	}

	var newA = document.createElement("a");
	newA.setAttribute("href", "#")
	newA.innerHTML = "Supprimer";

	newA.addEventListener("click", function(event){
		console.log("CLICK");
		console.log(event.target);
		console.log(item);

		var answer = confirm("Êtes-vous sûr de vouloir supprimer " + item.label + " ?");

		if (answer) {
			item.deleted = true;
			event.target.parentNode.classList.add("deleted");
			storeList(items);
		}

	});

	newLi.appendChild(newA);
	parentElement.appendChild(newLi);
}

function displayItemCounter(counterValue) {
	var counterElement = document.querySelector(".counter .number");
	counterElement.innerHTML = counterValue;
}


function storeList(list){
	localStorage.setItem("list", JSON.stringify(list));
}

function resetStoredList(list){
	localStorage.setItem("list", "[]");
}

function getStoredList(){
	var data = localStorage.getItem("list");

	if (!data){
		return [];
	}

	return JSON.parse(data);
}