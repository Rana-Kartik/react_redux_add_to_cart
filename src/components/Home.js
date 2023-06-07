

import React from 'react'

const Home = (props) => {
    console.log("props", props)
  return (
    <div>
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
           <button onClick={() => props.addToCartHandler({price: 1000, name: 'i phone 11'})}>Add to Cart</button>
           <button className='btn-remove' onClick={() => props.removeToCarttHandler()}>Remove to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Home
