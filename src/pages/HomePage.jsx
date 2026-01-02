import React from 'react'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultsGrid from '../components/ResultsGrid'
import { useSelector } from 'react-redux'


const HomePage = () => {
      const {query}= useSelector((state)=>state.search)
  return (
    <div >
       
          <SearchBar/>

          {query !==''? <div><Tabs/>
             <ResultsGrid/></div>:''} 
    </div>
  )
}

export default HomePage