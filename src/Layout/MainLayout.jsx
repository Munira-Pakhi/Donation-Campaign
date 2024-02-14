import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";
import { useEffect } from "react";

const MainLayout = () => {

    const loc = useLocation()
  useEffect(()=>{
    if(loc.pathname == "/"){
        document.title= `donation/home`
    }
    else{
        document.title =`donation${loc.pathname}`
    }
  },[loc.pathname])

    return (
        <div className=" max-w-screen-xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;