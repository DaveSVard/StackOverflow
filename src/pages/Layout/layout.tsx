import React from "react";
import { Navbar } from "../../components/Navbar/navbar";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/footer";

export const Layout:React.FC = ():JSX.Element => {
    return(
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}