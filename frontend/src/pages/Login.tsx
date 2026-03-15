
import { Link } from "react-router"
const Login = () => {
  return (
  <section className="flex justify-center items-center flex-col h-screen">
      <div className=" bg-gray-50 p-10 border-radius-2 rounded shadow-lg">
        <div className="flex flex-col justify-center items-center m-2">
          <img src="" alt="Logo" /> 
          <h1 className="font-bold text-2xl">Distributor Management</h1>
          <h1 className="font-bold text-2xl">System</h1>
        </div>

        <div className="form">
          <form action="" className="flex flex-col">
          
            {/* EMAIL INPUT */}
            <div className="relative mb-2">
              <input
                className="pl-10 pr-4 w-80  py-2 border rounded-lg"
                type="email"
                placeholder="Email"
                required
              />
              <div
                className="absolute inset-y-0 pl-3 
                    flex items-center 
                    pointer-events-none"
              >
                <i className="fas fa-envelope text-gray-400"></i>
              </div>
            </div>
          {/* PASSWORD */}
           <div className="relative mb-2">
            <input className="py-2 w-80  pl-10 pr-4 border rounded-lg" type="text" placeholder="Password" />
              <div
                className="absolute inset-y-0 pl-3 
                    flex items-center 
                    pointer-events-none"
              >
               <i className="fa-solid fa-lock text-gray-400"></i>
               
              </div>
                 <div
                className="absolute inset-y-0 right-0 pl-3 pr-2
                    flex items-center"
              >
              <button><i className="fas fa-eye-slash fa-lock text-gray-400"></i></button> 
               
              </div>
              </div>
              {/* FORGOT PASSWORD */}
            <div className="relative mb-5">
              <Link className="absolute inset-y-0 right-0" to="/forgotPassword">Forgot Password?</Link>
              </div>
           {/* Login BUTTON */}
            <button className="py-1 bg-blue-500 border m-2 text-white rounded-4xl shadow-lg">Login</button>
          </form>
        </div>
        <div className="flex justify-center ">
            {/* Login Question */}
          <p className="">
            Don't have an account?<Link className="font-bold" to="/register">Register</Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Login