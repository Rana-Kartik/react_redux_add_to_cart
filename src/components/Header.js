

import React from 'react'

const Header = (props) => {
    console.log("props", props)
  return (
    <div>
        <div className='add-item'>
            <span className='cart-count'>{props.cardData.length}</span>
            <img src='https://thumbs.dreamstime.com/b/shopping-cart-icon-add-to-flat-design-white-background-vector-illustration-210692317.jpg' alt='not'></img>
        </div>
    </div>
  )
}

export default Header
