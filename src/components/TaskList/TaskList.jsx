import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../redux/tasks/slice';
import css from './TaskList.module.css';

export function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {tasks.map((task, index) => (
        <li key={index} className={task.completed ? css.completed : ''}>
          <span>{task.text}</span>
          <div>
            <button onClick={() => dispatch(toggleTask(index))}>✅</button>
            <button onClick={() => dispatch(deleteTask(index))}>🗑️</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
