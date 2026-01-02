import React from 'react'
import { useDispatch } from 'react-redux'
import { addCollection, addedToast } from '../redux/features/collectionSlice'
 
const ResultCard = ({item}) => {
   const dispatch = useDispatch()
    const addToCollection =(item)=>{
        dispatch(addCollection(item))
        dispatch(addedToast())   
    }
  return (
    <div className='w-[16vw] relative h-70 bg-white rounded-xl overflow-hidden'>
      <a target='_blank' className='h-full' href={item.url}>
          {item.type == 'photo'?<img className='h-full w-full object-cover object-center' src={item.src} alt=''/>:''}
        {item.type == 'video'?<video className='h-full w-full object-cover object-center' autoPlay loop muted src={item.src} ></video>:''}
        {item.type == 'gif'?<img className='h-full w-full object-cover object-center' src={item.src} alt=''/>:''}
      </a>
        <div id='bottom' className='flex justify-between items-center absolute w-full px-4 py-3  bottom-0 h-[35%] text-white'>
            <h2 className='text-2xl font-semibold capitalize h-14 overflow-hidden'>{item.title}</h2>
            <button onClick={()=>{
            addToCollection(item)
            }} className='bg-indigo-600 active:scale-95 text-white rounded px-3 py-2 font-medium'>Save</button></div>
    </div>
  )
}

export default ResultCard