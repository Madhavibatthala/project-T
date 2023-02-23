import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  const { register,  formState: { errors } } = useForm();
  return (
    <div className='Login m-5'>
        <div className='container'>
          <div className='row'>
            <div className="col-4 m-auto" >
              <form className=' bg-transparent bg-opacity-50 shadow rounded-3'>
                <div>
                    <div className='m-3'>
                      <h3 className='text-center m-3 p-2'>LOGIN HERE</h3>
                      <hr  />
                    </div>
                    {/* username */}
                    <div className="m-3">
                      <label htmlFor="name" >Username</label>
                      <input type="text" style={{ borderRadius: '15px' }} id="name" className="form-control" {...register("name", { required: true })}/>
                      {errors.name?.type === 'required' && <p className='text-danger'>*Username is required</p>}

                    </div>
                    {/* email */}
                    <div className="m-3">
                      <label htmlFor="email" >Email Id</label>
                      <input type="email" style={{ borderRadius: '15px' }} id="email" className="form-control" {...register("email", { required: true })}/>
                      {errors.email?.type === 'required' && <p className='text-danger'>*Email required</p>}
                    </div>
                    {/* password */}
                    <div className="m-4">
                      <label htmlFor="pass">Password</label>
                      <input type="password" style={{ borderRadius: '15px' }} id="pass" className="form-control" {...register("pass", { required: true })} />
                      {errors.password?.type === 'required' && <p className='text-danger'>*Password required</p>}
                    </div>
                    <p className="mx-auto text-center">or</p>
                    <LoginSocialGoogle
             client_id={"128315515784-faui0fhjbpbvs7dc0tlk11vjkgrd59fb.apps.googleusercontent.com"}
             scope="openid profile email"
             discoveryDocs="claims_supported"
             access_type="offline"
             onResolve={({ provider, data }) => {
               console.log("provider : ",provider)
               console.log("data : ", data);
             }}
             onReject={(err) => {
               console.log(err);
             }}
           >
             <GoogleLoginButton className="mx-auto w-75"/>
           </LoginSocialGoogle>


                    {/* submit button */}
                    <div className='mb-0 text-center'>
                      <button  className="btn w-50 m-3 bg-dark text-white" onClick={()=>navigate('/blogs/webdev/addblog')}>Login</button>
                    </div>
                    
                </div>
              </form>
            </div>
          </div>
        </div>
  
      </div>
  );
}

export default Login;
