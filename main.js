const inputbox = document.getElementById('inputbox');
const addBtn = document.getElementById('addBtn');
const todolist = document.getElementById('todolist');

addBtn.addEventListener('click', () => {

    const inputText = inputbox.value.trim();
    if (inputText.length <= 0) {

        alert("please write something ...")

    }

    const li = document.createElement("li");
    // const p = document.createElement("p");


    li.innerHTML = inputText;
    todolist.appendChild(li);

    inputbox.value = "";




});

