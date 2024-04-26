import './App.css'
import Navbar from './components/navbar.jsx'
import HomeLogo from './assets/homelogo.svg'


function App() {

  return (
    <>
    <Navbar/>
    <div className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto">
        <img src={HomeLogo} alt="logo" className='pt-10 pl-10'/>
    </div>
    </>
  )
}

export default App
