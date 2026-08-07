import { useTasks } from '../context/TaskContext.jsx'
import TaskItem from './TaskItem.jsx'

function TaskList() {
  const { filteredTasks } = useTasks()

  if (filteredTasks.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-icon" aria-hidden="true">
          ✓
        </div>
        <h3>No tasks in this view</h3>
        <p>Choose another filter or add a new task.</p>
      </div>
    )
  }

  return (
    <ul className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  )
}

export default TaskList
