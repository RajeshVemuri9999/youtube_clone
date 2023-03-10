import React, { useEffect } from 'react'
import './Article.css'
import axios from 'axios'
import Latest_anime from '../../assets/images/latest-anime.jpg'
import Latest_anime2 from '../../assets/images/latest_anime-2.jpg'
import Latest_anime3 from '../../assets/images/latest_anime-3.jpg'
import Latest_anime4 from '../../assets/images/latest_anime-4.jpg'
import { Link } from 'react-router-dom'

const Article = () => {
    const[state,setState]=React.useState({});
    const[episodes,setEpisodes]=React.useState(false);
    const[prevId,setPrevId]=React.useState('')
    const getNew = async () => {
        const response=await axios.get(`https://kitsu.io/api/edge/anime`);
        if(response?.status==200)
              setState(response.data);
              console.log(response);
            };
      useEffect(() => {
        getNew();
      }, []);
      
      const episodesHandler=(item)=>{
        setPrevId(item.id)
        if(episodes==true){
          setEpisodes(false);}
          else{
            setEpisodes(true)
          }
        }
        
        
      
return (
  <div>  
        <div className='article'>
      {
        state.data&&state.data.map((item,index)=>{
          
          console.log(item);
          console.log(item.id);
          return(
            <div key={index} className='map_data'>
                  <img  onClick={()=>episodesHandler(item)}
                    src={item.attributes.posterImage?.medium}
                    alt='logo'/>
                    <div className='anime_title'>
                    {item.attributes.canonicalTitle}
                    </div>
                    <div className='description'>
                      <h6>Description:</h6>
                      <p>
                    {
                    episodes?<div>{item.attributes.description}</div>:''
                    }
                      </p>
                    </div>
                    </div>
                )
              })  
            }
      
        </div>
        <div className='latest_anime'>
          <Link to='anime/1'>
          <div className='anime-1'>
            <img src={Latest_anime} alt='logo'/>
          </div>
          </Link>
          <Link to='anime/2'>
          <div className='anime-2'>
            <img src={Latest_anime2} alt='logo'/>
          </div>
          </Link>
          <Link to='anime/3'>
          <div className='anime-3'>
            <img src={Latest_anime3} alt='logo'/>
          </div>
          </Link>
          <Link to='anime/4'>
           <div className='anime-4'>
            <img src={Latest_anime4} alt='logo'/>
          </div>
          </Link>
          </div>
           {/* <div className='anime-5'>
            <img src={Latest_anime5} alt='logo'/>
          </div> */}
        </div>
  )
}

export default Article
