import { connect } from 'react-redux'
import Player from '../components/Player'

const mapStateToProps = reduxState => {
  return {
    videoId: reduxState.playVideo
  }
}

export default connect(mapStateToProps)(Player)