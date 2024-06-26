import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/contact';

import AboutUs from './components/about';

import Home from './components/home';
import Task1 from './components/task1';
import Task2 from './components/task2';
import Task3 from './components/task3';
import Task4 from './components/task4';
import Task5 from './components/task5';
import LastPage from './components/last';
function App() {
  return (
    
    <>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/task1' element={<Task1 />}/>
        <Route path="/task2" element ={<Task2/>}/>  
        <Route path="/task3" element ={<Task3/>}/>
        <Route path="/task4" element ={<Task4/>}/>
        <Route path="/task5" element ={<Task5/>}/>
        <Route path="/last" element = {<LastPage/>}/>
      </Routes>


    </>
  );
}

export default App;