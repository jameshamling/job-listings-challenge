import './App.css'
import Background from './Background.jsx'
import Content from './Content.jsx'
import styles from './styles/App.module.css'

function App() {
  return (
    <div className={styles.app_container}>
      <Content />
      <Background />
    </div>
  )
}

export default App
