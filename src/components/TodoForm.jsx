import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/operations';

export default function TodoForm() {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    dispatch(addTodo(trimmedTitle));
    setTitle('');
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="todo-title">
        Task title
      </label>
      <input
        id="todo-title"
        className="todo-input"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter a task"
      />
      <button className="todo-submit" type="submit">
        Add Task
      </button>
    </form>
  );
}
