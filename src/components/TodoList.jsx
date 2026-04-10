import { useSelector } from 'react-redux';
import { selectTodos } from '../redux/selectors';
import TodoItem from './TodoItem';

export default function TodoList() {
  const todos = useSelector(selectTodos);

  if (!todos.length) {
    return <p className="empty-state">Your task list is empty.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
