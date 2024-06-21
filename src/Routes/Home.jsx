// REACT 
import React from 'react';

// ROUTER
import { Link } from 'react-router-dom';

// CSS
import styles from './Home.module.css';

// HOME
const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Larkin Corner Market</h1>
        {/* WINE */}
        <Link to='/quilt-cab'>Quilt Cab</Link>
        <Link to='/jlohr-seven-oaks-cabernet'>J. Lohr Seven Oaks Cabernet</Link>
        <Link to='/jlohr-riverstone-chardonnay'>J. Lohr Riverstone Chardonnay</Link>
        <Link to='/maggio-grigio'>Maggio Pinot Grigio</Link>
        <Link to='/oldsoul-cab'>Old Soul Cab</Link>
        <Link to='/oldsoul-zin'>Old Soul Zin</Link>
        <Link to='/oldsoul-pinot'>Old Soul Pinot</Link>
        <Link to='/laplaya-cab'>La Playa Cab</Link>
        <Link to='/laplaya-red'>La Playa Red Blend</Link>
        <Link to='/laplaya-rose'>La Playa Rose</Link>
        <Link to='/laplaya-sb'>La Playa Sauv Blanc</Link>
        <Link to='/laplaya-viognier'>La Playa Viognier</Link>

        {/* BEER */}
        
    </div>
  );
};

export default Home;