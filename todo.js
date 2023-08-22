let inp = document.querySelector("input");
let addTask = document.querySelector(".fa-square-plus");
let ul = document.querySelector("ul");
let btn = document.querySelector(".fa-trash");

addTask.addEventListener("click", function () {
    let item = document.createElement("li");
    item.classList.add("list"); // Add the 'list' class to the new item
    item.innerText = inp.value;

    let doneButton = document.createElement("button");
    doneButton.classList.add("done"); // Add the 'done' class to the new button
    doneButton.innerText = "Done";

    item.appendChild(doneButton); // Add the 'Done' button to the new item
    ul.appendChild(item); // Add the new item with the 'Done' button to the 'ul'

    inp.value = "";
});

ul.addEventListener("click", function (event) {
    // Check if the clicked element is the 'Done' button
    if (event.target.classList.contains("done")) {
        // Get the parent element (the list item) and add the 'list-item' class
        event.target.parentElement.classList.add("list-item");
    }
});
btn.addEventListener("click", function () {
    ul.remove();
});
