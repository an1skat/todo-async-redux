import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { fetchTodos } from './redux/operations';
import { selectIsLoading, selectError } from './redux/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <main className="app-shell">
      <section className="app-card">
        <header className="app-header">
          <p className="app-eyebrow">Async Redux Todo Board</p>
          <h1>Todo List</h1>
          <p className="app-subtitle">
            Add tasks, mark them done, and keep everything synced with the API.
          </p>
        </header>

        <TodoForm />

        {isLoading && <p className="status-message">Loading todos...</p>}
        {error && (
          <p className="status-message status-message--error">Error: {error}</p>
        )}

        <TodoList />
      </section>
    </main>
  );
}
