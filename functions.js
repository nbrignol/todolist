function displayOneMoreItem(item){
	var newLi = document.createElement("li");
	newLi.classList.add("item");
	newLi.innerHTML = item.label;

	var newA = document.createElement("a");
	newA.setAttribute("href", "#")
	newA.innerHTML = "Supprimer";

	newLi.appendChild(newA);
	parentElement.appendChild(newLi);
}

function displayItemCounter(counterValue) {
	var counterElement = document.querySelector(".counter .number");
	counterElement.innerHTML = counterValue;
}