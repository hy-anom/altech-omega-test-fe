import { Link } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <nav>
      <div className='left-side'>
        <Link to='/'>home</Link>
      </div>
      <div className='right-side'>
        <Link to='/about'>about</Link>
        <Link to='/pricing'>pricing</Link>
        <Link to='/contact'>contact</Link>
        <Link to='/login'>login</Link>
      </div>
    </nav>
  )
}

export default Navbar