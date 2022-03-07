import { Link } from 'react-router-dom';
import './style.css';
const Nav = (props) => {
    return (
        <>
            <Link className='link' to="/first">Home</Link>
            <Link className='link' to="/second">About Me</Link>
            <Link className='link' to="/third">Contact</Link>
        </>
    )
}

export default Nav;