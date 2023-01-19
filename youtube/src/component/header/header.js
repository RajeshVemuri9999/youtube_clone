import React from 'react'
import './header.css'
import Youtube_logo from '../../assets/images/youtube.svg'
import Video_add from '../../assets/images/video_add.png'
import Notification_bell from '../../assets/images/notification_bell.png'
import User from '../../assets/images/user.png'
import Menu_bar  from '../../assets/images/menu_bar.svg'

const Header = (props) => {

  return (
   
        <div className='header_main'>
          <div className='menu_bar'>
          <button onClick={()=>{props.state.setState(!props.state.state)}} ><img src={Menu_bar} alt='logo'/> </button>
          </div>
           <div className='col-md-3'>
             <img src={Youtube_logo} alt='logo' height={'55rem'} width={'150rem'}/>
           </div>
           <div className='col-md-6'>
              <div class="input-group md-form form-sm form-1 pl-0">
              <div class="input-group-prepend">
              <span class="input-group-text purple lighten-3" id="basic-text1"><i class="fas fa-search text-white"    aria-hidden="true"></i></span>
              </div>
              <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search"/>
              </div>
           </div>
           <div className='col-md-3 icons'>
                <img src={User} alt='logo' height={'20rem'} width={'20rem'}/>
                <img src={Notification_bell} alt='logo' height={'20rem'} width={'20rem'}/>
                <img src={Video_add} alt='logo' height={'20rem'} width={'20rem'}/>
           </div>
        </div>
    
  )
}

export default Header
