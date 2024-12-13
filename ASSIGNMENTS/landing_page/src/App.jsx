import Header from './components/header/Header'
import Rectangle from './assets/images/Rectangle.svg'
import './App.css'
import Hero from './components/hero/Hero';

const App = () => {
  return (
    <div className='app'>
      <img src={Rectangle} alt="" className='rectangle-img'/>
      <Header />
      <Hero />
    </div>
  )
}

export default App