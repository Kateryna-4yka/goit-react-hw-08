import css from './TasksPage.module.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../redux/tasks/slice';
import { TaskList } from '../../components/TaskList/TaskList';

export default function TasksPage() {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const text = form.elements.text.value.trim();
    if (!text) return;
    dispatch(addTask(text));
    form.reset();
  };

  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <input name="text" className={css.input} placeholder="Введи задачу..." />
        <button type="submit" className={css.button}>Add task</button>
      </form>
      <TaskList />
    </>
  );
}
