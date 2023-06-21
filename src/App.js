import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import AddBook from './components/AddBook'
import Books from './components/Book/Books'
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import BookDetail from './components/Book/BookDetail';
function App() {
  return (
   <React.Fragment>
<header>
  <Header/>
</header>
<main>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<AddBook/>}/> 
    <Route path="/books" element={<Books/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/books/:id" element={<BookDetail/>} exact/>
  </Routes>
</main>

   </React.Fragment>
  );
}

export default App;
