import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/operations';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li className="todo-item">
      <button
        className={`todo-toggle${todo.completed ? ' todo-toggle--completed' : ''}`}
        type="button"
        onClick={() => dispatch(toggleTodo(todo))}
      >
        <span className="todo-marker" aria-hidden="true" />
        <span className="todo-title">{todo.title}</span>
      </button>

      <button
        className="todo-delete"
        type="button"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        Delete
      </button>
    </li>
  );
}
