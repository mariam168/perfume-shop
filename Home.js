
import { Link } from 'react-router-dom';

import background from './Assets/background2.jpg';
import './style.css';

export default function Home() {
  
  return (
    <div className='main' style={{ height:"100vh",overflow:"hidden"}}>
    
     <div className='content'>
        <h2>Discover the perfect scent to complement your
          <br></br> unique personality and style</h2>
        <button>Read More</button>
        </div>  
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/WomenPerfume">
            <li>For Her</li>
          </Link>
          <Link to="/">
            <li>for Him</li>
          </Link>
          
          <Link to="/">
            <li>About us</li>
          </Link>
          <Link to="/">
            <li>contact us</li>
          </Link>
          <Link to="/" className='log'>
            <li>Log In</li>
          </Link>
         
          
        </ul>
      </nav>

      
      
      
    </div>
  );
}
