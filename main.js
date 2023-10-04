const inputbox = document.getElementById('inputbox');
const addBtn = document.getElementById('addBtn');
const todolist = document.getElementById('todolist');

addBtn.addEventListener('click', () => {

    const inputText = inputbox.value.trim();
    if (inputText.length <= 0) {

        alert("please write something ...")

    }
    else {
        const li = document.createElement("li");
        const s = document.createElement("div");




        li.innerHTML = inputText;
        // li.appendChild(p);

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";;

        const delBtn = document.createElement("button");
        delBtn.innerText = "Remove";


        s.appendChild(editBtn);
        s.appendChild(delBtn);

        li.appendChild(s);
        
        todolist.appendChild(li);


        inputbox.value = "";

    }





});

