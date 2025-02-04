import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import NavBar from './components/NavBar'
import { Routes, Route,  } from 'react-router-dom'
import Home from './components/homePage'
import { RegisterMember } from './components/RegisterMember'

// import { RegisterMember } from './components/RegisterMember'



function App() {

  return (

    <Container className="my-4">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/registerMember' element={<RegisterMember />}/>
      </Routes>
    </Container>

  )

}

export default App


