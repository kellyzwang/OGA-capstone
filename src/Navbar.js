import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="topnav">
            <div className="mid-nav">
                <img src={require("./imgs/logo.png")} width="100" height="100" />
            </div>
            <div className="left-nav">
                <li><Link to='/'>Project Info</Link></li>
                <li><Link to='/'>Our Solution</Link></li>
                <li><Link to='/'>Team</Link></li>
            </div>
          
        </div>
    )
}

export default Navbar;