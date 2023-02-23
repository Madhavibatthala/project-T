import React from "react";
import quoteblur from '../images/blurcopy2.jpg'
import exp from '../images/exp2copy.jpg'
import listen from '../images/shareexp2copy.jpg'
function Home() {
    return ( 
    <div className="text-center">
        <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel active">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={quoteblur} className="w-100 h-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={exp} className=" w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={listen} className=" w-100" alt="..."/>
    </div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> 
<div className="container m-auto p-5 justify-content-center">
Technology industry is constantly evolving, and it is becoming increasingly difficult for laypersons
 to keep up with the latest developments and trends and many people struggle to establish a community to 
explore experiences and opportunities from  global techno geeks effectively regarding internships, Placements, 
Fellowship programs,  Hackathons, Contests, Programming, etc. This website provide wide range of information on 
various domains and opportunities, written in a way that is segregated and easy to understand for you!!
</div>
    </div> );
}

export default Home;