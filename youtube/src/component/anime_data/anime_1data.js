import React from 'react'
import './anime.css'
import Anime1 from '../../assets/images/nested_anime1.jpg'
import Anime2 from '../../assets/images/nested_anime2.jpg'
import Anime3 from '../../assets/images/nested_anime3.jpg'
import Anime4 from '../../assets/images/nested_anime4.jpg'

const dummy = () => {
  return (
    <div>

    <div className='nested_anime'>
      <div>
      <img src={Anime1} alt='logo'/>
      </div>
      <div>
      <img src={Anime2} alt='logo'/>
      </div>
      <div>
      <img src={Anime3} alt='logo'/>
      </div>
      <div>
      <img src={Anime4} alt='logo'/>
      </div>
    </div>
      <div className='nested_anime_row2'>
      <div>
      <img src={Anime4} alt='logo'/>
      </div>
      <div>
      <img src={Anime3} alt='logo'/>
      </div>
      <div>
      <img src={Anime2} alt='logo'/>
      </div>
      <div>
      <img src={Anime1} alt='logo'/>
      </div>
      </div>
      <div className='nested_anime_row3'>
      <div>
      <img src={Anime3} alt='logo'/>
      </div>
      <div>
      <img src={Anime4} alt='logo'/>
      </div>
      <div>
      <img src={Anime1} alt='logo'/>
      </div>
      <div>
      <img src={Anime2} alt='logo'/>
      </div>
      </div>
    </div>
  )
}

export default dummy
