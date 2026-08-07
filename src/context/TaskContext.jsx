import { createContext, useContext, useEffect, useReducer } from 'react'
import { initialState, taskReducer } from '../reducer/taskReducer.js'

const TaskContext = createContext(null)
const STORAGE_KEY = 'ckp-task-manager-tasks'

function loadInitialState(defaultState) {
  if (typeof window === 'undefined') {
    return defaultState
  }

  try {
    const savedTasks = window.localStorage.getItem(STORAGE_KEY)

    if (!savedTasks) {
      return defaultState
    }

    const parsedTasks = JSON.parse(savedTasks)

    return Array.isArray(parsedTasks)
      ? { ...defaultState, tasks: parsedTasks }
      : defaultState
  } catch (error) {
    console.warn('Unable to load tasks from localStorage:', error)
    return defaultState
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState, loadInitialState)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks))
    } catch (error) {
      console.warn('Unable to save tasks to localStorage:', error)
    }
  }, [state.tasks])

  const filteredTasks =
    state.filter === 'all'
      ? state.tasks
      : state.tasks.filter((task) => task.status === state.filter)

  const addTask = (task) => {
    dispatch({ type: 'ADD_TASK', payload: task })
  }

  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId })
  }

  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter })
  }

  const value = {
    tasks: state.tasks,
    filteredTasks,
    filter: state.filter,
    addTask,
    deleteTask,
    setFilter,
  }

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
}

export function useTasks() {
  const context = useContext(TaskContext)

  if (!context) {
    throw new Error('useTasks must be used inside a TaskProvider')
  }

  return context
}
