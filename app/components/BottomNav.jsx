import React from 'react'

const BottomNav = () => {
  return (
    <div className='fixed bottom-0 h-12 w-full left-0 flex text-2xl justify-between py-2 px-9 text-gray-400 bg-gray-100'>
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