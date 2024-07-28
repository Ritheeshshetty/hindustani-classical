// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes ,Route} from 'react-router-dom';
import About from './About';
import './App.css'
import Media from './Media';
import Nav from './Nav';
import Section from './Section';
import Theory from './Theory';
import './index.css'
import Footer from './Footer';


function App() {
  // let component 
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Section/>
  //     break;
  //   case "/theory":
  //     component = <Theory/>
  //     break
  //   case "/media":
  //     component = <Media/>
  //     break
  //   case "/about":
  //     component = <About/>
  //     break
  // }
  // const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Section/>}/>
      <Route path='/theory' element={<Theory/>}/>
      <Route path='/media' element={<Media/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
