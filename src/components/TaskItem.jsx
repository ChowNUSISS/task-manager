import { Link } from 'react-router-dom'
import { useTasks } from '../context/TaskContext.jsx'

const statusLabels = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  done: 'Done',
}

function TaskItem({ task }) {
  const { deleteTask } = useTasks()

  return (
    <li className="task-item">
      <Link className="task-link" to={`/tasks/${task.id}`}>
        <div className="task-copy">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>

        <div className="task-meta">
          <span className={`status-badge status-${task.status}`}>
            {statusLabels[task.status]}
          </span>
          <span className={`priority-badge priority-${task.priority}`}>
            {task.priority} priority
          </span>
        </div>
      </Link>

      <button
        className="delete-button"
        type="button"
        onClick={() => deleteTask(task.id)}
        aria-label={`Delete ${task.title}`}
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
