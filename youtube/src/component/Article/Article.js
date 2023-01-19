import React, { useEffect } from 'react'
import './Article.css'
import axios from 'axios'
import Latest_anime from '../../assets/images/latest-anime.jpg'

const Article = () => {
    const[state,setState]=React.useState({});
    const getNew = async () => {
        const response=await axios.get(`https://kitsu.io/api/edge/anime`);
        if(response?.status==200)
              setState(response.data);
              console.log(response);
            };
      useEffect(() => {
        getNew();
      }, []);
      
      
      
return (
  <div>  
        <div className='article'>
      {
        state.data&&state.data.map((item,index)=>{
          console.log(item);
          return(
            <div key={index} className='map_data'>
                  <img  
                    src={item.attributes.posterImage?.medium}
                    alt='logo'/>
                    </div>
                )
              })  
            }
      
        </div>
        <div className='latest_anime'>
            <img src={Latest_anime} alt='logo'/>
        </div>
            </div>
  )
}

export default Article
