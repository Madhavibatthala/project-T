// import React from "react";
//import {useNavigate} from 'react-router-dom';
// function Blogs() {
//     const navigate = useNavigate();
//     return (
//         <div className="Blogs text-center d-flex">
//            <button className="btn btn-warning" onClick={()=>navigate('/blogs/webdev')}>
//             webdevelopment
//            </button>
//            <button className="btn btn-warning" >
//             Competitive Programming
//            </button>
//            <button className="btn btn-warning" >
//             Open-Source
//            </button>
//            <button className="btn btn-warning">
//             Machine Learning
//            </button>
//         </div>
//     );
// }
// export default Blogs;
import React from 'react';
//import clear from '../images/Quote-Give-back-clear.jpg'
import {useNavigate} from 'react-router-dom';
//import clubs from '../images/clubs.jpg'
//import pro from '../images/programming.jpg'
import int from '../images/interview.jpg'
import img1 from '../images/image1.png';
import img4 from "../images/image4.jpg";
import img5 from "../images/img5.jpg";
import cp from "../images/cp.jpg"
import bc from "../images/bc.jpg"
import ins from "../images/ins.png"
import oth from "../images/other.jpg"
import ds from '../images/ds.jpg'
import cc from '../images/cc.jpeg'
function Blogs() {
    const navigate = useNavigate();
    return ( 
    <div className='text-center text-dark'>
        <div className='container mx-auto mt-4'>
        <div className="card-group gap-5 my-5 container">
          <div className="card shadow rounded-5">
            <img className="card-img-top" src={img5} alt="..."/>
            <div className="card-body">
              <h6 className="card-title">WEBDEVELOPMENT</h6>
              <div className='mb-2'>
               <button className="btn btn-dark text-light" onClick={()=>navigate('/blogs/webdev/login')}>
                AddBlog
                </button>
               </div>
               <button className="btn btn-dark text-light" onClick={()=>navigate('/blogs/webdev/viewblogs')}>
                view Blogs
                </button>
            </div>
          </div>
          <div className="card shadow rounded-5">
            <img className="card-img-top" src={img4} alt="..."/>
            <div className="card-body">
               <h6 className="card-title">MACHINE LEARNING</h6>
               <div className='mb-2'>
               <button className="btn btn-dark text-light" onClick={()=>navigate('/blogs/ml/login')}>
                AddBlog
                </button>
               </div>
               <button className="btn btn-dark text-light" onClick={()=>navigate('/blogs/ml/viewblogs')}>
                view Blogs
                </button>
            </div>
          </div>
          {/*interviews */}
          <div className="card shadow rounded-5">
            <img className="card-img-top" src={int} alt="..."/>
            <div className="card-body">
              <h6 className="card-title">INTERVIEWS</h6>
              <div className='mb-2'>
               <button className="btn btn-dark text-light" >
                AddBlog
                </button>
               </div>
               <button className="btn btn-dark text-light">
                view Blogs
                </button>
            </div>
            </div>
            </div>
            <div className="card-group gap-5 my-5 container">
            {/*Competitive Programming */}
            <div className="card shadow rounded-5">
            <img className="card-img-top" src={cp} alt="..."/>
            <div className="card-body">
              <h6 className="card-title">COMPETITIVE PROGRAMMING</h6>
              <div className='mb-2'>
               <button className="btn btn-dark text-light" >
                AddBlog
                </button>
               </div>
               <button className="btn btn-dark text-light">
                view Blogs
                </button>
            </div>
            </div>
            {/*Block chain technology */}
            <div className="card shadow rounded-5">
            <img className="card-img-top" src={bc} alt="..."/>
            <div className="card-body">
              <h6 className="card-title">BLOCKCHAIN TECHNOLOGY</h6>
              <div className='mb-2'>
               <button className="btn btn-dark text-light" >
                AddBlog
                </button>
               </div>
               <button className="btn btn-dark text-light">
                view Blogs
                </button>
            </div>
            </div>
            {/* internship programs */}
            <div className="card shadow rounded-5">
            <img className="card-img-top" src={ins} alt="..."/>
            <div className="card-body">
              <h6 className="card-title">INTERNSHIP PROGRAMS</h6>
              <div className='mb-2'>
               <button className="btn btn-dark text-light" >
                AddBlog
                </button>
               </div>
               <button className="btn btn-dark text-light">
                view Blogs
                </button>
            </div>
            </div>
          </div>
          <div className="card-group gap-5 my-5 container">
              {/*data science */}
            <div className="card shadow rounded-5">
            <img className="card-img-top" src={ds} alt="..."/>
            <div className="card-body">
              <h6 className="card-title">DATA SCIENCE</h6>
              <div className='mb-2'>
               <button className="btn btn-dark text-light" >
                AddBlog
                </button>
               </div>
               <button className="btn btn-dark text-light">
                view Blogs
                </button>
            </div>
            </div>
            {/*Block chain technology */}
            <div className="card shadow rounded-5">
            <img className="card-img-top" src={cc} alt="..."/>
            <div className="card-body">
              <h6 className="card-title">CLOUD COMPUTING</h6>
              <div className='mb-2'>
               <button className="btn btn-dark text-light" >
                AddBlog
                </button>
               </div>
               <button className="btn btn-dark text-light">
                view Blogs
                </button>
            </div>
            </div>
            {/* others */}
            <div className="card shadow rounded-5">
            <img className="card-img-top" src={oth} alt="..."/>
            <div className="card-body">
              <h6 className="card-title">OTHERS</h6>
              <div className='mb-2'>
               <button className="btn btn-dark text-light" onClick={()=>navigate('/blogs/others?')} >
                Add Blog
                </button>
               </div>
               {/*<button className="btn btn-dark text-light">
                view Blogs
    </button>*/}
            </div>
            </div>
          </div>
        </div>   
    </div> 
    );
}

export default Blogs;