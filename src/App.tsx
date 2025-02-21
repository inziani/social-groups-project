
// import { Route,createBrowserRouter,  createRoutesFromElements, RouterProvider } from 'react-router-dom'
// import Home from './components/member/HomePage'
// import RegisterMember from './components/RegisterMember';
// import Reports from './components/Reports'
// import {RouteLayout} from './layout/RouteLayout';
import Registration from './components/authentication/Registration';



export default function App() {

// const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<RouteLayout/>}>
//     <Route index element={<Login />}/>
//     <Route path='/registerMember' element={<RegisterMember />}/>
//     <Route path='/reports' element={<Reports />}/>
//   </Route>))
//   return (

//     <main className='py-10 bg-red-50 h-screen'>
//       <RouterProvider router={router}/>
//     </main>
    
//   )

return(
 <main className='bg-gray-950 text-gray-200 min-h-screen'>
  <Registration/>

  
 </main>
)

}
  






