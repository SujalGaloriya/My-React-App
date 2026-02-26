import React, { useContext } from 'react'
import './WatchDisplay.css'
import WatchItem from '../WatchItem/WatchItem'
import { StoreContext } from '../../Context/StoreContext'

const WatchDisplay = ({category}) => {

  const {watch_list} = useContext(StoreContext);

  return (
    <div className='watch-display' id='watch-display'>
      <h2>Our Collections</h2>
      <div className='watch-display-list'>
        {watch_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <WatchItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}
      </div>
    </div>
  )
}

export default WatchDisplay
