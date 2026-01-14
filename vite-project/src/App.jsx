
import './App.css'
import Hero from './components/Hero'
import Slider from './components/Slider'
import Episodes from './components/Episodes'
import Games from './components/Games'
import About from './components/About'

function App() {

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="aliens">
        <Slider />
      </div>
      <Episodes />
      <Games />
      <About />
    </>
  )
}

export default App

