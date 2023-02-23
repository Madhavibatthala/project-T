import './App.css';
import React from 'react';
import {Route,Routes,Link} from 'react-router-dom'
import Home from './components/Home'
import Blogs from './components/Blogs';
import { Carousel } from 'bootstrap';
import AddBlogWebdev from './components/webdev/AddBlogWebdev';
import ViewBlogsWebdev from './components/webdev/ViewBlogsWebdev';
import AddBlogMl from './components/ml/AddBlogMl';
import ViewBlogsMl from './components/ml/ViewBlogsMl';
import LoginMl from './components/ml/LoginMl';
import LoginWebdev from './components/webdev/LoginWebdev';
import Others from './components/Others';
function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">VJ TechEra</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse d-flex justify-contend-end" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active"  to="/blogs">Blogs</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    <Route path="/blogs" element={<Blogs/>}></Route>
    <Route path="/blogs/webdev/addblog" element={<AddBlogWebdev/>}></Route>
    <Route path="/blogs/webdev/viewblogs" element={<ViewBlogsWebdev/>}></Route>
    <Route path="/blogs/webdev/login" element={<LoginWebdev/>}></Route>
    <Route path="/blogs/ml/addblog" element={<AddBlogMl/>}></Route>
    <Route path="/blogs/ml/viewblogs" element={<ViewBlogsMl/>}></Route>
    <Route path="/blogs/ml/login" element={<LoginMl/>}></Route>
    <Route path="/blogs/others?" element={<Others/>}></Route>
  </Routes>
  {/* FOOTER */}
     <div className='d-flex flex-column  bg-dark text-white'>
      <footer className='py-3 mt-auto'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
             <a href="#" className='nav-link px-2 text-muted'>Home</a>
          </li>
          <li className='nav-item'>
             <a href="#" className='nav-link px-2 text-muted'>Features</a>
          </li>
          <li className='nav-item'>
             <a href="#" className='nav-link px-2 text-muted'>Contact</a>
          </li>
          <li className='nav-item'>
             <a href="#" className='nav-link px-2 text-muted'>About</a>
          </li>
        </ul>
        <p className='text-center text-muted'>@ 2023 TechnoGeeks, VNRVJIET</p>
      </footer>
     </div>
    </div>
  );
}

export default App;