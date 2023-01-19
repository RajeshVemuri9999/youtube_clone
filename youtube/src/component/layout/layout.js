import React from "react";
import { appContext } from "../../App";
import Header from "../header/header";
import './layout.css'

const Layout = (props) => {
  return (
    <div>
      <div className="main-cont row">
        <appContext.Consumer>
          {value=>(<Header state={value} />)}
          
        </appContext.Consumer>
      </div>
      <div className="row">{props.children || ""}</div>
    </div>
  );
};

export default Layout;
