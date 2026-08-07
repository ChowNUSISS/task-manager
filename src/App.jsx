import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import { TaskProvider } from './context/TaskContext.jsx'
import TaskDetailPage from './pages/TaskDetailPage.jsx'
import TaskListPage from './pages/TaskListPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <div className="app-shell">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/tasks" replace />} />
              <Route path="/tasks" element={<TaskListPage />} />
              <Route path="/tasks/:id" element={<TaskDetailPage />} />
              <Route path="*" element={<Navigate to="/tasks" replace />} />
            </Routes>
          </main>
          <footer className="site-footer">
            CKP · Module 2 Frontend Development · React Task Manager
          </footer>
        </div>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default App
