import React from "react";
import { NavLink } from "react-router-dom";
import {AiOutlineShoppingCart} from "react-icons/ai"

function Navbar() {
    return (
        <div className=" w-full flex justify-center items-center py-4">
            <div className="flex justify-between items-center max-w-[1000px] w-11/12">
                <NavLink to="/">
                    <div>
                        <img src="../logo2-removebg-preview.png" alt="logo" loading="lazy" height={70} width={140} />
                    </div>
                </NavLink>

                <div className=" flex text-gray-200 space-x-2 mt-1 text-xl justify-center items-center">
                    <NavLink to="/">
                        <p>Home</p>
                    </NavLink>

                    <NavLink to="/cart" className="">
                        <AiOutlineShoppingCart className=" h-5"/>
                    </NavLink>
                    
                </div>
            </div>
        </div>
    )
}
export default Navbar;