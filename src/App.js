import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';
import Img from './components/img/movie-850.png';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar';
import Moviesitem from './components/Moviesitem';
import Search from './components/Search';
import Detail from  './components/Detail';


export default class App extends Component {
  render() {
    return (
      <>
      <div className='Header fixed-top'>
        <img src={Img}></img>
        <h1>
          Prime Play
        </h1>
      </div>
      <div className="text-bg-secondary p-3">
        
         <Router>
      <div className='Footer fixed-bottom'> 
      <Link to="/trending"><span>Trending</span></Link>
      <Link to="/movie"><span>Movie</span></Link>
      <Link to="/tv"><span>Tv</span></Link>
      <Link to="/Search"><span>Search</span></Link>
      </div>
        <Routes>
          <Route exact path='/' element={<Moviesitem category="all"/>} ></Route>
          <Route exact path='/trending' element={<Moviesitem category="all"/>} ></Route>
          <Route exact path='/movie' element={<Moviesitem category="movie"/>} ></Route>
          <Route exact path='/tv' element={<Moviesitem category="tv"/>} ></Route>
          <Route  exact path='/search' element={<Search />} ></Route>
          <Route  exact path='/detail' element={<Detail />} ></Route>
        </Routes>
      </Router>
      
      </div>
      
      
      </>
    )
  }
}

