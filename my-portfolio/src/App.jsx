
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />

        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="site-footer">© {new Date().getFullYear()} Ankush Wagh — Built with React</footer>
    </div>
  )
}

export default App
