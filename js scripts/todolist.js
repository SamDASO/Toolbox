const field = document.getElementById("todolist_field");
const olList = document.getElementById("ol_list");
const formToDo = document.getElementById("todolist_form");
const noTask = document.getElementById('empty_todo');


olList.innerHTML = localStorage.getItem('todolist');
const btnRemove = document.querySelectorAll(".btn_remove");

for (let button of btnRemove) {
    button.addEventListener('click', () => {
        del(button.parentElement);
    })
}

noTask.style.display = (olList.innerHTML == "") ? "block" : "none";

formToDo.addEventListener('submit', (e) => {
    const li = document.createElement("li");
    const buttonRem = document.createElement("button");
    buttonRem.classList.add('btn_remove');

    buttonRem.innerHTML = '<img src="./img/bin.png" alt="X">';
    buttonRem.addEventListener('click', () => {
        del(li);
    })

    li.innerHTML = field.value;
    li.appendChild(buttonRem);

    olList.appendChild(li);

    field.value = "";
    e.preventDefault();

    noTask.style.display = "none";

    localStorage.setItem("todolist", olList.innerHTML);
})


function del(element) {
    element.remove();
    if (olList.innerHTML == "") {
        noTask.style.display = "block";
    }

    localStorage.setItem("todolist", olList.innerHTML);
}



