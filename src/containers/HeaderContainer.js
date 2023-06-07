import {connect} from 'react-redux'
import Header from '../components/Header'


const mapStateToProps = state => ({
    cardData :state.cardItems
})

const mapDispatchProps = dispatch => ({
    
})
export default connect(mapStateToProps,mapDispatchProps)(Header)