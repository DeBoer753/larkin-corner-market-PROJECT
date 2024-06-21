// REACT
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// ROUTES
import Home from '../src/Routes/Home'

// CARDS
import QuiltCab from './Cards/QuiltCab'
import JLohrSevenOaks from './Cards/JLohrSevenOaks'
import JLohrRiverstone from './Cards/JLohrRiverstone'
import MaggioGrigio from './Cards/MaggioGrigio'
import OldSoulCab from './Cards/OldSoulCab';
import OldSoulZin from './Cards/OldSoulZin';
import OldSoulPinot from './Cards/OldSoulPinot';
import LaPlayaCab from './Cards/LaPlayaCab';
import LaPlayaRed from './Cards/LaPlayaRed'
import LaPlayaSB from './Cards/LaPlayaSB';
import LaPlayaRose from './Cards/LaPlayaRose';
import LaPlayaViognier from './Cards/LaPlayaViognier';

// CSS
import './App.css';

// APP
const App = () => {
  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          {/* WINE */}
          <Route index element={<Home />} />
          <Route path='/' element={<Home />}/>
          <Route path='/quilt-cab' element={<QuiltCab />}/>
          <Route path='/jlohr-seven-oaks-cabernet' element={<JLohrSevenOaks />}/>
          <Route path='/jlohr-riverstone-chardonnay' element={<JLohrRiverstone />}/>
          <Route path='/maggio-grigio' element={<MaggioGrigio />}/>
          <Route path='/oldsoul-cab' element={<OldSoulCab />}/>
          <Route path='/oldsoul-zin' element={<OldSoulZin />}/>
          <Route path='/oldsoul-pinot' element={<OldSoulPinot />}/>
          <Route path='/laplaya-cab' element={<LaPlayaCab />}/>
          <Route path='/laplaya-red' element={<LaPlayaRed />}/>
          <Route path='/laplaya-rose' element={<LaPlayaRose />}/>
          <Route path='/laplaya-sb' element={<LaPlayaSB />}/>
          <Route path='/laplaya-viognier' element={<LaPlayaViognier />}/>
    
          {/* BEER */}

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;