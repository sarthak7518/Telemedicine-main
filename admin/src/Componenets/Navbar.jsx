import React, { useContext } from "react";
import { assets } from "../assets/assets_admin/assets";
import { AdminContext } from "../Context/AdminContext";
import {useNavigate} from 'react-router-dom';

const Navbar = () => {
  const { atoken,setAToken } = useContext(AdminContext);

  const navigate = useNavigate()
  const logout=()=>{
    useNavigate('/')
    atoken && setAToken('')
    atoken && localStorage.removeItem('atoken')
  }
  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 tex-xs">
        <img className="cursor-pointer w-36 sm:w-40" src={assets.admin_logo} alt="" />
        <p className="border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 ">{atoken ? "Admin" : "Doctor"}</p>
      </div>
      <button onClick={logout} className="bg-[#5F6FFF] text-white text-sm px-10 py-2 rounded-full">LogOut</button>
    </div>
  );
};

export default Navbar;
