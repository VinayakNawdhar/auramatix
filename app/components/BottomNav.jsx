import React from 'react'

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 h-16 w-full left-0 flex text-4xl justify-evenly py-2 text-gray-400 bg-gray-100'>
      <div>
        <i className="ri-home-4-line"></i>
      </div>
      <div>
        <i className="ri-shopping-cart-2-line"></i>
      </div>
      <div>
        <i className="ri-heart-line"></i>
      </div>
      <div>
        <i className="ri-user-line"></i>
      </div>
    </div>
  )
}

export default BottomNav