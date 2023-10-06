const inputbox = document.getElementById('inputbox');
const addBtn = document.getElementById('addBtn');
const todolist = document.getElementById('todolist');

let editTodo = null;

addBtn.addEventListener('click', () => {

    const inputText = inputbox.value.trim();


    if (inputText.length <= 0) {

        alert("please write something ...")

    }



    else if (addBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "Add";
        inputbox.value = "";
    }

    else {

        const li = document.createElement("li");
        // const s = document.createElement("span");
        const p = document.createElement("p");




        p.innerHTML = inputText;
        li.appendChild(p);

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn", "editBtn");


        const delBtn = document.createElement("button");
        delBtn.innerText = "Remove";
        delBtn.classList.add("btn", "delBtn");


        li.appendChild(editBtn);
        li.appendChild(delBtn);

        // li.appendChild(s);

        todolist.appendChild(li);


        inputbox.value = "";

        saveInLocal(inputText);
    }

});




todolist.addEventListener('click', (e) => {
    //  alert("work");
    console.log(e.target);

    if (e.target.innerHTML === "Remove") {
        console.log(e.target.parentElement);
        todolist.removeChild(e.target.parentElement);
    }


    if (e.target.innerHTML === "Edit") {
        console.log(e.target.previousElementSibling.innerHTML);
        inputbox.value = e.target.previousElementSibling.innerHTML;
        inputbox.focus();
        addBtn.value = "Edit";
        editTodo = e;

        // todolist.removeChild(e.target.parentElement);
    }
})


const saveInLocal=(data)=>{

    let dataList = [];
   // dataList = localStorage.getItem("dataList");
    dataList.push(data);
    console.log(dataList);
    localStorage.setItem("dataList",JSON.stringify(dataList));
}


