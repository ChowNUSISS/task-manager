import { Link, useParams } from 'react-router-dom'
import { useTasks } from '../context/TaskContext.jsx'

const statusLabels = {
  todo: 'To Do',
  'in-progress': 'In Progress',
  done: 'Done',
}

function TaskDetailPage() {
  const { id } = useParams()
  const { tasks } = useTasks()
  const task = tasks.find((item) => String(item.id) === id)

  if (!task) {
    return (
      <div className="page-container detail-page">
        <section className="not-found-card">
          <span className="not-found-code">404</span>
          <h1>Task not found</h1>
          <p>The task may have been deleted or the address may be incorrect.</p>
          <Link className="primary-button inline-button" to="/tasks">
            Return to tasks
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="page-container detail-page">
      <Link className="back-link" to="/tasks">
        ← Back to all tasks
      </Link>

      <article className="detail-card">
        <div className="detail-topline">
          <span className={`status-badge status-${task.status}`}>
            {statusLabels[task.status]}
          </span>
          <span className={`priority-badge priority-${task.priority}`}>
            {task.priority} priority
          </span>
        </div>

        <span className="eyebrow">Task #{task.id}</span>
        <h1>{task.title}</h1>

        <div className="detail-section">
          <h2>Description</h2>
          <p>{task.description}</p>
        </div>

        <dl className="detail-facts">
          <div>
            <dt>Status</dt>
            <dd>{statusLabels[task.status]}</dd>
          </div>
          <div>
            <dt>Priority</dt>
            <dd>{task.priority}</dd>
          </div>
        </dl>
      </article>
    </div>
  )
}

export default TaskDetailPage
