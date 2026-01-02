import React from 'react'
import { useSelector } from 'react-redux'
import CollectionCard from '../components/CollectionCard'

const CollectionPage = () => {
  const collection = useSelector((state) => state.collection.items)
  return (
    <div className='w-[16vw] relative h-70 bg-white rounded-xl overflow-hidden '>
      {collection.map((item,idx)=>{
        return <div key={idx}>
          <CollectionCard item={item}/>
        </div>
      })}      
    </div>
  )
}

export default CollectionPage