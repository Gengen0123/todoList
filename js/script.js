// TODO: この処理はJavaScriptの読み込み確認用です。
// Issue #2「Todo追加機能」の実装時に削除します。
console.log("script.js が読み込まれました");

const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault(); // ページのリロード防止

    const text = todoInput.value;

    const li = document.createElement("li");
    li.textContent = text;

    todoList.appendChild(li);

    todoInput.value = "";
});
