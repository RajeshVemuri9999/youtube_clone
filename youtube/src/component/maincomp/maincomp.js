import React from "react";
import Leftbar from "../leftBar/left_bar";
import { appContext } from "../../App";
import './main_comp.css'
import Article from "../Article/Article";

const Maincomp = () => {
  return (
    <div className="row">
      <div className="col-3">
        <appContext.Consumer>
          {(value) => <Leftbar state={value.state} />}
        </appContext.Consumer>
      </div>
      <div className='col-9' >
        <Article/>
      </div>
    </div>
  );
};

export default Maincomp;
