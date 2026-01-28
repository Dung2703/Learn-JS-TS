console.log("lab1");

const saveBtn = document.getElementById("Save");
const input = document.getElementById("name");
function getRandomId(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (saveBtn) {
    saveBtn.addEventListener("click", () => {
        const myTodo = {
            id: getRandomId(1, 1000000),
            name: input.value
        }
        const currentTodoStr = localStorage.getItem("Todo");
        if (currentTodoStr) {
            const currentTodo = JSON.parse(currentTodoStr);
            currentTodo.push(myTodo)
            localStorage.setItem("Todo", JSON.stringify(currentTodo));
        } else {
            localStorage.setItem("Todo", JSON.stringify([myTodo]));
        }
        window.location.href = "lab1.html";
    });
};

const generateTodoTable = () => {
    const todoListStr = localStorage.getItem("Todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        const tbody = document.querySelector("#todoList tbody");
        if (todoList && todoList.length) {
            todoList.forEach((Todo, index) => {
                tbody.innerHTML += `<tr>
                <td>${Todo.id}</td>
                <td>${Todo.name}</td>
                <td><button data-id=${Todo.id} class="btnDelete">erase</button></td>
            </tr>`

            })
        };
    }
}

generateTodoTable();

const deleteBtns = document.querySelectorAll(".btnDelete");
if (deleteBtns) {
    deleteBtns.forEach((btn, index) => {
        console.log(btn, index);
        btn.addEventListener("click", (e) => {
            const id = btn.getAttribute("data-id");
            handleDeleteTodo(id)
        })
    })
}

const handleDeleteTodo = (id) => {
    const todoListStr = localStorage.getItem("Todo");
    if (todoListStr) {
        const todoList = JSON.parse(todoListStr);
        const newTodoList = todoList.filter((Todo, index) => Todo.id + "" !== id);
        localStorage.setItem("Todo", JSON.stringify(newTodoList));
        window.location.reload();
    }
}