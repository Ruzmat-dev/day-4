import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Countries from './components/Countries';
import Country from "./pages/Country"
import Left from './pages/Left';
import Right from './pages/Rigth';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Countries/>}/>
        <Route path='/countries' element={<Countries/>}/>
        <Route path='/countries/:names' element={<Country/>}/>
        <Route path='/home' element={<Home/>}>
          <Route path='/home/left' element={<Left/>}/>
          <Route path='/home/right' element={<Right/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default App;