import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
function ViewBlogsWebdev() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:2000/webdev/getblogs')
            
          .then((res) => {
             //console.log("res.data : ",res.data);
             //let arr  = Object.values(res.data);
             //console.log("type1 = ",typeof(arr[1])); 
             //console.log("type1 = ",typeof(blogs)); 
             //console.log("type2 = ",arr[1]); 
             let arr = res.data.payload;
             console.log("data : ",arr);
             arr.reverse();
            //console.log("blogs : ",blogs.length)
            setBlogs(arr);
        })
        // .then(response => {
        //     const decoder = new TextDecoder();
        //     const text = decoder.decode(response.data);
        //     return JSON.parse(text);
        // })
        // .then(array => console.log("arr = ",array))
          .catch((err) => console.log(err));
    },[] );
    return (
        <div className="container ">
            <p className="text-info mt-2">webdevelopment</p>
            {blogs.map(b => (
            <div key={b._id}>
               <div className="card text-dark bg-transparent bg-opacity-50 shadow rounded-3 mx-auto my-3 col-4">
                    <div className="card-header">{b.author}</div>
                    <div className="card-body">
                        <h5 className="card-title text-center">{b.title}</h5>
                        <div className="card-body justify-content">
                            <p className="">{b.description}</p>
                            <a href = {b.urls} className="card-link ">{b.urls}</a>
                        </div>
                    </div>
                </div>
            </div>
         ))}
        </div>
    );
}
export default ViewBlogsWebdev;