import React from 'react'

const NameHeader = ({name}) => {
  return (
    <div className=''>
        <h1 className='text-3xl'>Hello <span className='font-bold'>{name},</span></h1>
        <p>Let’s take care of your skin!</p>
    </div>
  )
}

export default NameHeader