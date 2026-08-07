import { useState } from 'react'
import { useTasks } from '../context/TaskContext.jsx'

const emptyForm = {
  title: '',
  description: '',
  status: 'todo',
  priority: 'medium',
}

function AddTaskForm() {
  const { addTask } = useTasks()
  const [formData, setFormData] = useState(emptyForm)

  const isFormInvalid =
    !formData.title.trim() || !formData.description.trim()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((currentData) => ({ ...currentData, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isFormInvalid) {
      return
    }

    addTask({
      id: Date.now(),
      title: formData.title.trim(),
      description: formData.description.trim(),
      status: formData.status,
      priority: formData.priority,
    })

    setFormData(emptyForm)
  }

  return (
    <section className="form-card" aria-labelledby="add-task-heading">
      <div className="section-heading compact">
        <div>
          <span className="eyebrow">Create</span>
          <h2 id="add-task-heading">Add a new task</h2>
        </div>
      </div>

      <form className="task-form" onSubmit={handleSubmit}>
        <label className="field field-full">
          <span>Title</span>
          <input
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Review CKP project README"
            required
          />
        </label>

        <label className="field field-full">
          <span>Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe what needs to be completed..."
            rows="4"
            required
          />
        </label>

        <label className="field">
          <span>Status</span>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="todo">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="done">Done</option>
          </select>
        </label>

        <label className="field">
          <span>Priority</span>
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <button className="primary-button field-full" type="submit" disabled={isFormInvalid}>
          Add task
        </button>
      </form>
    </section>
  )
}

export default AddTaskForm
