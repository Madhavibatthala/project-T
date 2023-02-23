import React from "react";
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function AddBlogMl() {
  const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onFormSubmit=(userData)=>{
        console.log(userData);
        axios.post('http://localhost:2000/ml/postblog',userData)
        .then(response=>{alert("blog added")})
        .catch(error=>{alert("something went wrong")})
    }
    return (
        <div className='addblog m-5'>
        <div className='container'>
          <div className='row'>
            <div className="col-4 m-auto" >
              <form className=' bg-transparent bg-opacity-50 shadow rounded-3' onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <div className='m-3'>
                      <h3 className='text-center m-3 p-2'>ADD BLOG</h3>
                      <hr  />
                    </div>
                    {/* username */}
                    <div className="m-3">
                      <label htmlFor="author" >Author</label>
                      <input type="text" style={{ borderRadius: '15px' }} id="author" className="form-control" {...register("author", { required: true })} />

                      {errors.author?.type === 'required' && <p className='text-danger'>*Authorname is required</p>}
  
                    </div>
                    {/* username */}
                    <div className="m-3">
                      <label htmlFor="title" >Title</label>
                      <input type="text" style={{ borderRadius: '15px' }} id="title" className="form-control" {...register("title", { required: true })} />

                      {errors.title?.type === 'required' && <p className='text-danger'>*Title required</p>}
  
                    </div>
                    {/* Blog */}
                    <div className="m-4">
                      <label htmlFor="description">Description</label>
                      <textarea type="text" style={{ borderRadius: '15px' }} id="description" className="form-control" {...register("description", { required: true })} />
  
                      {errors.description?.type === 'required' && <p className='text-danger'>*Description required</p>}
                    </div>
  
                    {/* URLs */}
                    <div className="m-3">
                      <label htmlFor="urls">URLs</label>
                      <input type="url" style={{ borderRadius: '15px' }} id="urls" className="form-control" placeholder="http://www.example.com" {...register("urls", { required: true })}/>
                      {errors.description?.type === 'required' && <p className='text-danger'>*url required</p>}
                    </div>
  
                    {/* submit button */}
                    <div className='mb-0 text-center'>
                      <button type="submit" className="btn w-50 m-3 bg-dark text-white">create</button>
                    </div>
                    {/*logout*/}
                    <div className='mb-0 text-center'>
                      <button  className="btn w-50 m-3 bg-dark text-white" onClick={()=>navigate('/blogs')}>Logout</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </div>
  
      </div>
    );
}
export default AddBlogMl;