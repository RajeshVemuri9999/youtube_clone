import React from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from "react-pro-sidebar";
import Home from '../../assets/images/home.png'
import Subscribe from '../../assets/images/subscribe_bell.png'
import Library from '../../assets/images/library.png'
import User from '../../assets/images/user_leftbar.png'
import './left_bar.css'

const Leftbar = (props) => {
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } = useProSidebar();
  React.useEffect(()=>{

      collapseSidebar(props.state)

  },[props.state])
  const getData =async()=>{
    const response = await fetch("https://kitsu.io/api/edge/anime");
    const res = await response.json();
  }
  
  
  React.useEffect(()=>{
    getData()
  },[])
  
  return (
    <Sidebar>
      <Menu>
          <MenuItem>
          <div className="menu-items">
          <img src={Home} alt='logo' height={'25rem'} width={'25rem'}/> 
          <div> Home </div>
          </div>
           </MenuItem>
          <MenuItem> 
          <div className="menu-items">
          <img src={Subscribe} alt='logo' height={'25rem'} width={'25rem'}/> 
          <div> Subscribe</div>
          </div>
          </MenuItem>
          <MenuItem> 
          <div className="menu-items">
          <img src={Library} alt='logo' height={'25rem'} width={'25rem'}/> 
          <div> Library </div>
          </div>
          </MenuItem>
          <MenuItem> 
          <div className="menu-items">
          <img src={User} alt='logo' height={'25rem'} width={'25rem'}/> 
          <div> Users </div>
          </div>
          </MenuItem>{" "}
      </Menu>
    </Sidebar>



  );
};

export default Leftbar;
