import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" to="/tasks" aria-label="CKP Task Manager home">
          <span className="brand-mark" aria-hidden="true">
            CKP
          </span>
          <span>
            <strong>CKP Task Manager</strong>
            <small>Module 2 Frontend Development</small>
          </span>
        </Link>
        <span className="header-chip">React Web</span>
      </div>
    </header>
  )
}

export default Header
