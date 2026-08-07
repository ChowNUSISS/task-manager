export const initialTasks = [
  {
    id: 1,
    title: 'Set up CKP project repository',
    description:
      'Initialise the CKP frontend project repository, add a .gitignore, and push the first commit.',
    status: 'done',
    priority: 'high',
  },
  {
    id: 2,
    title: 'Plan CKP task manager layout',
    description:
      'Sketch the page structure for the task list, filter controls, add-task form, and detail page.',
    status: 'done',
    priority: 'medium',
  },
  {
    id: 3,
    title: 'Build task list interface',
    description:
      'Display each task with its title, current status, priority, and a link to the full details.',
    status: 'in-progress',
    priority: 'high',
  },
  {
    id: 4,
    title: 'Test reducer actions',
    description:
      'Check that ADD_TASK, DELETE_TASK, and SET_FILTER update the task manager state correctly.',
    status: 'todo',
    priority: 'high',
  },
  {
    id: 5,
    title: 'Update CKP project README',
    description:
      'Document the setup steps, project structure, completed bonus features, and AI tools used.',
    status: 'todo',
    priority: 'medium',
  },
  {
    id: 6,
    title: 'Complete final CKP submission check',
    description:
      'Run the production build, capture the final screenshot, and verify the GitHub repository before submission.',
    status: 'todo',
    priority: 'low',
  },
]

export const initialState = {
  tasks: initialTasks,
  filter: 'all',
}

export function taskReducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }

    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      }

    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload,
      }

    default:
      return state
  }
}
