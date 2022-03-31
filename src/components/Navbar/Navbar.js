import React, { useState } from "react";
import Path from "../Path/Path";
import {MenuIcon, XIcon} from '@heroicons/react/solid'

const Navbar = () => {

    const [open, setOpen] = useState(false);

  const routes = [
    { id: 1, name: "Home", path: "/home" },
    { id: 1, name: "Menu", path: "/menu" },
    { id: 1, name: "Shop", path: "/shop" },
    { id: 1, name: "Offer", path: "/offer" },
    { id: 1, name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-indigo-200">
        <div onClick={() => setOpen(!open)} className="w-8 h-8 md:hidden">
            {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}
        </div>
      <ul className={`md:flex justify-center text-black w-full p-3 bg-indigo-200 absolute md:static ${open ? 'top-8' : 'top-[-320px]'}`}>
        {routes.map((route) => (
            <Path key={route.id} 
            route={route}
          ></Path>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
