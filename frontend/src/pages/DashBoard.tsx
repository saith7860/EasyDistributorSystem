import { Link } from "react-router";

const DashBoard = () => {
  return (
    <div className="grid relative sm:grid-cols-12 h-screen">
      {/* SIDEBAR */}
      <div className="absoulte sm:col-span-3 sm:rounded-l-2xl bg-gray-700">
        <div className="relative">
          {/* LOGO */}
          <div className="absolute mt-8 pl-4">
            <img src="" alt="Logo" />
            <div className="flex flex-col pl-4 mt-10 gap-8">
              <button className=" text-left text-gray-200 hover:bg-blue-500  transition-all duration-300 hover:scale-110"><Link to="/dashboard">DashBoard</Link></button>
              <button className=" text-left text-gray-200 hover:bg-blue-500 transition-all duration-300 hover:scale-110"><Link to="/products">Product Management</Link></button>
              <button className=" text-left text-gray-200 hover:bg-blue-500 transition-all duration-300 hover:scale-110"><Link to="/stockManagement">Stock Management</Link></button>
              <button className=" text-left text-gray-200 hover:bg-blue-500 transition-all duration-300 hover:scale-110"><Link to="/sales">Sales Management</Link></button>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="sm:col-span-9 sm:rounded-r-2xl bg-gray-100">
        {/* HEADER */}
        <div className="flex justify-between mb-4 mt-4 p-4">
            <h1 className="text-2xl font-bold">DashBoard</h1>
           <button><img className="w-10 h-10 rounded-full object-cover ring-4 ring-gray-300" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?semt=ais_hybrid&w=740&q=80" alt="profile pic" /></button>
        </div>
        {/* Cards */}
            <div className="grid p-4 grid-cols-5 mb-4">
                <div className="w-30 h-30 bg-white shadow-lg rounded-lg">

                </div>
                <div className="w-30 h-30 bg-white shadow-lg rounded-lg"></div>
                <div className="w-30 h-30 bg-white shadow-lg rounded-lg"></div>
                <div className="w-30 h-30 bg-white shadow-lg rounded-lg"></div>
                <div className="w-30 h-30 bg-white shadow-lg rounded-lg"></div>
            </div>
        {/*RECENT TRANSACTIONS  */}
        <div className="grid p-4 w-100 h-50 bg-white shadow-lg rounded">
         <div>Recent Transactions</div>
         <div>

         </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
