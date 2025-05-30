import '../css/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
        <Link to="/home" className='nav-links'>Home</Link>
    </div>
  )
}

export default Header