import 'bootstrap/dist/css/bootstrap.min.css'
import { Route,createBrowserRouter,  createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './components/member/HomePage'
import { RegisterMember } from './components/RegisterMember'
import Reports from './components/Reports'
import {RouteLayout} from './layout/RouteLayout';



export default function App() {

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<RouteLayout/>}>
    <Route index element={<Home />}/>
    <Route path='/registerMember' element={<RegisterMember />}/>
    <Route path='/reports' element={<Reports />}/>
  </Route>))
  return (

    <main className='py-10 bg-red-50 h-screen'>
      <RouterProvider router={router}/>
    </main>
    
  )

}
  






