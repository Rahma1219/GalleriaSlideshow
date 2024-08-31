import './Layout.css'

import { useState } from "react";
import Header from "./../../Components/Header/Header";
import { Outlet } from 'react-router-dom';
import SlideshowContext from '../../Components/SlideshowContext/SlideshowContext';



function Layout() {
  const [open, setOpen] = useState(false)


  return (
    <>


      <SlideshowContext.Provider value={{ open, setOpen }}>
        <Header></Header>
        <Outlet></Outlet>
      </SlideshowContext.Provider>

    </>
  );
}

export default Layout;
