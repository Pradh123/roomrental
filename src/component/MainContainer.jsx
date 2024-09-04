import React from 'react'
import AsideFilter from './maincontainer/AsideFilter'
import Container from './maincontainer/Container'

const MainContainer = () => {
  return (
    <div className='flex w-full'>
        <div className=' relative w-1/3'>
            <AsideFilter/>
        </div>
        <div className='w-2/3 '>
            <Container/>
        </div>
    </div>
  )
}

export default MainContainer