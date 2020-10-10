//Selectors

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners

todoButton.addEventListener('click',addTodo);

//Functions

function addTodo(event)
{
    //Prevent Form Submission
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create List
    const todoItem = document.createElement("li");
    todoItem.innerText = todoInput.value;
    todoItem.classList.add("todo-item");
    todoDiv.appendChild(todoItem);
    //Checked button
    const checkedButton = document.createElement("button");
    checkedButton.innerHTML = '<i class="fas fa-check"></i>';
    checkedButton.classList.add("checked-btn");
    todoDiv.appendChild(checkedButton);
    //Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //Append to List
    todoList.appendChild(todoDiv);
    //Clear todo input value
    todoInput.value = "";
}