import { Route, Routes } from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forgot from "../pages/Forgot";
import HomePage from "../pages/HomePage";
import ProtectedRoutes from "./ProtectedRoutes";
import ResetPassword from "../pages/ResetPassword";
import ProtectResetPassword from "./ProtectResetPassword";
import AddProduct from "../pages/AddProduct";
import ViewProduct from "../pages/ViewProduct";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/add-product" element={<AddProduct/>}/>
      <Route path ="/view-product" element={<ViewProduct/>}/>



      <Route element={<ProtectResetPassword/>}>
        <Route path ="/reset-password" element ={<ResetPassword/>}/>
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route path="/HomePage" element={<HomePage />} />    
      </Route>

    </Routes>
  )
}

export default AppRoutes
