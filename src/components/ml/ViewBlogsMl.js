import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
function ViewBlogsMl() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
       axios.get('http://localhost:2000/ml/getblogs')
          .then((res) => {
            let arr = res.data.payload;
            arr.reverse();
            setBlogs(arr);
        })
        .catch((err) => console.log(err));
    },[] );
    return (
        <div className="container">
            <p className="text-info mt-2">Machine learning</p>
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
export default ViewBlogsMl;