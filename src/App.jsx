import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Top from './Component/Top'
import Navbar from './Component/Navbar'
import BotNavbar from './Component/BotNavbar'
import Hero from './Component/Hero'
import Herobottom from './Component/Herobottom'
import Heronext from './Component/Heronext'
import Footer from './Component/Footer'
import { AuthContext } from './Component/Context/Context'
import Refersubmit from './Component/Refersubmit'

function App() {
  const [count, setCount] = useState(0)
const {currentUser } = useContext(AuthContext)
console.log(currentUser);
  return (
    <>
    <div className="dic">
      
   {!currentUser ? <><Top></Top>
   <Navbar></Navbar>
  <BotNavbar></BotNavbar>
  <Hero></Hero>
  <Heronext></Heronext>
  <Footer></Footer></> : <Refersubmit></Refersubmit>}
  </div>
    </>
  )
}

export default App
