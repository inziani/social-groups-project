import 'bootstrap/dist/css/bootstrap.min.css'
// import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import { Routes, Route,  } from 'react-router-dom'
import Home from './components/homePage'
import { RegisterMember } from './components/RegisterMember'
import Reports from './components/Reports'
// import { Container } from 'react-bootstrap'

// import { RegisterMember } from './components/RegisterMember'



function App() {

  return (

   
      
      <div>
      <NavBar/>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/registerMember' element={<RegisterMember />}/>
        <Route path='/reports' element={<Reports />}/>
      </Routes>
      </div>
      
      </div>
    
      
    

  )

}

export default App


