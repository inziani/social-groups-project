import { NavLink, useNavigate } from "react-router-dom"

export default function NavBar(){

    const navigate = useNavigate();
    return(
        <div className="navbar">
            <img src="" alt="" />
            <ul>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/registerMember'><li>Register</li></NavLink>
                <NavLink to='/reports'><li>Reports</li></NavLink>
    
            </ul>
            <button onClick={()=>navigate('/reports')}>Login</button>
        </div>
    )
}