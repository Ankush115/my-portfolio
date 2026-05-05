import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
      <div className="app">
        <Header  />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
        <footer className="site-footer">© {new Date().getFullYear()} Ankush Wagh — Built with React</footer>
      </div>
    </Router>
  )
}

export default App