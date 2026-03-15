import DashBoard from "./pages/DashBoard";
import Registeration from "./pages/Registration";
import Login from "./pages/Login";
import Products from "./pages/Products";
import StockManagemnet from "./pages/StockManagemnet";
import Sales from "./pages/Sales";
import { Routes,Route } from "react-router";
const App = () => {
  return (
    <>
    {/* <div className="text-2xl">EasyDistributor</div> */}
    <Routes>
      <Route path="/register" element={ <Registeration/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/stockManagement" element={<StockManagemnet/>}/>
      <Route path="/sales" element={<Sales/>}/>
    </Routes>
   
    </>

  )
}

export default App;