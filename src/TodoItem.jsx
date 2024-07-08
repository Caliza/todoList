export function TodoItem({completed, id, title}) {
    return <li>
    <label>
        <input type="checkbox"
            checked={completed}
        // onchange={e => toggleTodo(todo.id, e.target.checked)} 
        />
        {title}
    </label>
    <button
        //</li>onClick={() => deleteTodo(todo.id)} 
        className="btn btn-danger">Delete
    </button>
</li>
}