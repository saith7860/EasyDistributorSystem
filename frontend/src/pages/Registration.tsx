import { useState } from "react";
import { Link } from "react-router";
const Registeration = () => {
  const [formEntries, setFormEntries] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
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
            {/* NAME INPUT */}
            <div className="relative mb-2">
                  <input className="py-2 pl-10 w-80 border rounded-lg pr-4" type="text" placeholder="Full Name" required />
                  <div className="absolute pl-3 inset-y-2">
                    <i className="fa-solid fa-user text-gray-400"></i>
                  </div>
            </div>
          
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
            {/* PHONE NUMBER INPUT */}
            <div className="relative mb-2">
              <input className="pl-10 w-80  pr-4 py-2 border rounded-lg" type="number" placeholder="Phone Number"  />
              <div className="absolute inset-y-2 pl-3 ">
                <i className="fa-solid fa-phone text-gray-400"></i>
              </div>
            </div>
            {/* CREATE PASSWORD */}
            <div className="relative mb-2">
            <input className="py-2 w-80  pl-10 pr-4 border rounded-lg" type="text" placeholder="Create Password" />
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
          {/* CONFIRM PASSWORD */}
           <div className="relative mb-2">
            <input className="py-2 w-80  pl-10 pr-4 border rounded-lg" type="text" placeholder="Confirm Password" />
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
           {/* REGISTER BUTTON */}
            <button className="py-1 bg-blue-500 border m-2 text-white rounded-4xl shadow-lg">Register</button>
          </form>
        </div>
        <div className="flex justify-center ">
            {/* Login Question */}
          <p className="">
            Already have an account?<Link className="font-bold" to="/login">Login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registeration;
