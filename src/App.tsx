import * as styles from './App.styles'
import { Button } from './components/Button'
import { Title } from './components/Title'

function App() {
  return (
    <main css={styles.splash}>
      <header className='header'>
        <span className='wedding-of-text'>The wedding of</span>
        <Title />
        <span className='wedding-date'>Sunday, 15 June 2025</span>
      </header>
      <Button>Open Invitation</Button>
    </main>
  )
}

export default App
