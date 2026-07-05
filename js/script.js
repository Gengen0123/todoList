const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // ページのリロード防止

    const text = todoInput.value.trim(); //trimで前後の空白を除去

    if (text === "") {
        return;
    } //textが空白ならreturnで処理を止める

    const li = document.createElement("li");
    li.textContent = text;

    todoList.appendChild(li);

    todoInput.value = "";
});
