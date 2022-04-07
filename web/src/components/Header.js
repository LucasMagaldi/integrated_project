import LogoSec from "./LogoSec.js";

const Header = () => {
    return (
        <div className="App-header">  
            <input 
                className="header-menu-icon"
                type='checkbox' 
                id="header-menu-icon"
                name="header-menu-icon"
                /> 
            <label for='header-menu-icon'></label>
            <nav className="nav-header">
                <ul class="pt-5">
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Studio</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <div className="header-logo">
                <LogoSec />
            </div>
            
        </div>
    )
}


export default Header;