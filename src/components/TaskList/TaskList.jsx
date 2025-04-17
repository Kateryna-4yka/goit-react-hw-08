import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../../redux/tasks/slice';
import css from './TaskList.module.css';
import clsx from 'clsx';
import { IoCheckmark,IoTrash } from "react-icons/io5";


export function TaskList() {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {tasks.map((task, index) => (
        <div className={css.buttons}>
        <div key={index} className={css.buttons}>
          <p className={clsx(css.text, {[css.completed]: task.completed,})}>{task.text}
          </p>
        </div>

          <div className={css.buttons}>
            <button className={css.btn} onClick={() => dispatch(toggleTask(index))}><IoCheckmark /> Done</button>
            <button className={css.btn}  onClick={() => dispatch(deleteTask(index))}><IoTrash /> Delete</button>
          </div>
          </div>))}
    </ul>
  );
}
