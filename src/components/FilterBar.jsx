import { useTasks } from '../context/TaskContext.jsx'

const filters = [
  { value: 'all', label: 'All' },
  { value: 'todo', label: 'To Do' },
  { value: 'in-progress', label: 'In Progress' },
  { value: 'done', label: 'Done' },
]

function FilterBar() {
  const { filter, setFilter } = useTasks()

  return (
    <div className="filter-bar" aria-label="Filter tasks by status">
      {filters.map((item) => (
        <button
          key={item.value}
          className={`filter-button ${filter === item.value ? 'active' : ''}`}
          type="button"
          aria-pressed={filter === item.value}
          onClick={() => setFilter(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  )
}

export default FilterBar
