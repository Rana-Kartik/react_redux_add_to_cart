import {connect} from 'react-redux'
import Home from '../components/Home'
import {addToCart, removeToCart} from '../service/action/actions'

const mapStateToProps = state => ({
    cardData :state.cardItems
})

const mapDispatchProps = dispatch => ({
    addToCartHandler : data=> dispatch(addToCart(data)),
    removeToCarttHandler : data=> dispatch(removeToCart(data))
})
export default connect(mapStateToProps,mapDispatchProps)(Home)