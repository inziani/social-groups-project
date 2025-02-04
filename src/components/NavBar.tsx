import { Link } from "react-router-dom"

export default function NavBar(){
    return(
        <div className="navbar">
            <img src="" alt="" />
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/registerMember'><li>Register</li></Link>
                <Link to='/reports'><li>Reports</li></Link>
    
            </ul>
            <button>Get Started</button>
        </div>
    )
}