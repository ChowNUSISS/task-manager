import AddTaskForm from '../components/AddTaskForm.jsx'
import FilterBar from '../components/FilterBar.jsx'
import TaskList from '../components/TaskList.jsx'
import { useTasks } from '../context/TaskContext.jsx'

function TaskListPage() {
  const { tasks, filteredTasks } = useTasks()

  const completedCount = tasks.filter((task) => task.status === 'done').length
  const activeCount = tasks.length - completedCount

  return (
    <div className="page-container">
      <section className="hero-panel">
        <div>
          <span className="eyebrow">CKP Dashboard</span>
          <h1>Keep every task moving.</h1>
          <p>
            Organise the CKP project work, focus on priorities, and open any task
            to view its complete details.
          </p>
        </div>

        <div className="summary-cards" aria-label="Task summary">
          <div className="summary-card">
            <strong>{tasks.length}</strong>
            <span>Total tasks</span>
          </div>
          <div className="summary-card">
            <strong>{activeCount}</strong>
            <span>Active</span>
          </div>
          <div className="summary-card">
            <strong>{completedCount}</strong>
            <span>Completed</span>
          </div>
        </div>
      </section>

      <div className="content-grid">
        <section className="list-card" aria-labelledby="task-list-heading">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Tasks</span>
              <h2 id="task-list-heading">Your task list</h2>
              <p>
                Showing {filteredTasks.length} of {tasks.length} tasks
              </p>
            </div>
            <FilterBar />
          </div>

          <TaskList />
        </section>

        <AddTaskForm />
      </div>
    </div>
  )
}

export default TaskListPage
