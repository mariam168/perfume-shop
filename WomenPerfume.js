import { Link } from 'react-router-dom';

import Women from './Assets/women perfume.jpg';
import './style.css';
import item1 from './Assets/men1.png';
import item2 from './Assets/men2.png';
import item3 from './Assets/men3.png';
import item4 from './Assets/women1.png';
import item5 from './Assets/women2.png';
import item6 from './Assets/women3.png';
export default function WomenPerfume() {
  
  return (
    <div className='womenMain' >
      <nav className='womenNav'>
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
      
      <input type='search'></input>
      <img
          src={
            'https://www.next.co.uk/static-content/icons/header/next/v2/vision/search-input-button.svg'
          }
          alt="search_icon"
          className="searchIcon"
          
        />
      <div className='womenItems'>
         <div><img src={item1} alt='item1'></img></div>
         <div><img src={item2} alt='item2'></img></div>
         <div><img src={item3} alt='item3'></img></div>
         <div><img src={item4} alt='item4'></img></div>
         <div><img src={item5} alt='item5'></img></div>
         <div><img src={item6} alt='item6'></img></div>
      </div>
    </div>
    
  );
}
