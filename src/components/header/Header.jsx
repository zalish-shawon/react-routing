import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav >
                <span style={{marginRight: '5px'}}>My Website</span> <br />
                <Link style={{marginRight: '5px'}} to="/">Home</Link>
                <Link style={{marginRight: '5px'}} to="/about">About</Link>
                <Link style={{marginRight: '5px'}} to="/contact">Contact</Link>
                <Link style={{marginRight: '5px'}} to="/career">Career</Link>
                <Link style={{marginRight: '5px'}} to = "/contact">Contact</Link>
                <Link style={{marginRight: '5px'}} to="/users">Users</Link>
        
            </nav>
        </div>
    );
};

export default Header;