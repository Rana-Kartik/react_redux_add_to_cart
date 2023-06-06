

import React from 'react'

const Home = () => {
  return (
    <div>
        <div className='add-item'>
            <img src='https://thumbs.dreamstime.com/b/shopping-cart-icon-add-to-flat-design-white-background-vector-illustration-210692317.jpg' alt='not'></img>
        </div>
      <h1>Home component</h1>
      <div className='cart-wrapper'>
        <div className='img-wrapper item'>
            <img src="https://i.pcmag.com/imagery/slot_contents/260.fit_lpad.size_400x225.v1677268688.webp" alt='not'></img>
        </div>
        <div className='text-wrapper item'>
            <span>
                I-Phone
            </span>
            <span>
                Price: $1000.00
            </span>
        </div>
        <div className='btn-wrapper item'>
           <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
