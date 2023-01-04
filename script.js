var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var select = ul.getElementsByTagName("li");
var test = document.getElementsByTagName("button")

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		element.target.parentElement.remove();
	}
}

function toggleAfterClick(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    }
}

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var div = document.createElement("div");
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	div.classList.add("wrapper");
	ul.appendChild(div);
	div.append(li, delButton);
	li.classList.add("taskClass");
	li.appendChild(document.createTextNode(input.value));
	input.value = "";
	delButton.innerHTML="Delete";
    delButton.classList.add("delClass")
}

function addListAfterClick(){
        if (inputLength() > 0) {
           createListElement();
        }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.which === 13) {
        createListElement();
     }
}

button.addEventListener("click", addListAfterClick)

ul.addEventListener("click", toggleAfterClick)

ul.addEventListener("click", deleteListElement)

input.addEventListener("keypress", addListAfterKeypress)