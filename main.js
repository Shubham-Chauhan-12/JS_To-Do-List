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
        const s = document.createElement("span");
        const p = document.createElement("p");




        p.innerHTML = inputText;
        li.appendChild(p);

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn" ,"editBtn");


        const delBtn = document.createElement("button");
        delBtn.innerText = "Remove";
        delBtn.classList.add("btn" ,"delBtn");


        s.appendChild(editBtn);
        s.appendChild(delBtn);

        li.appendChild(s);
        
        todolist.appendChild(li);


        inputbox.value = "";

    }





});

