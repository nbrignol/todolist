function displayOneMoreItem(item){
	var newLi = document.createElement("li");
	newLi.classList.add("item");
	newLi.innerHTML = item.label;

	if (item.deleted) {
		newLi.classList.add("deleted");
	}

	var newA = document.createElement("a");
	newA.setAttribute("href", "#")
	newA.innerHTML = "Supprimer";

	newA.addEventListener("click", function(event){
		console.log("CLICK");
		console.log(event.target);
		console.log(item);

		item.deleted = true;
		event.target.parentNode.classList.add("deleted");

	});

	newLi.appendChild(newA);
	parentElement.appendChild(newLi);
}

function displayItemCounter(counterValue) {
	var counterElement = document.querySelector(".counter .number");
	counterElement.innerHTML = counterValue;
}