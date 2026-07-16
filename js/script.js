const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // ページのリロード防止

    const text = todoInput.value.trim(); // trimで前後の空白を除去

    if (text === "") {
        return;
    } // textが空白ならreturnで処理を止める

    const li = document.createElement("li");

    const todoText = document.createElement("span");
    todoText.textContent = text;

    const completeButton = document.createElement("button");
    completeButton.textContent = "完了";

    completeButton.addEventListener("click", () => {
        todoText.classList.toggle("completed");

        if (todoText.classList.contains("completed")) {
            completeButton.textContent = "未完了";
        } else {
            completeButton.textContent = "完了";
        }
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "削除";

    deleteButton.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(todoText);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    todoList.appendChild(li);

    todoInput.value = "";
});