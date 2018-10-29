import { connect } from "react-redux";

import VideoWrap from '../client/components/VideoWrap'
import { loadDramas } from '../client/containers/Drama/actions';

class DramaList extends React.Component {
  componentDidMount(){
    this.props.loadDramas();
  }

  render() {
    return (
      <div>
        <h1>天天「劇」在這</h1>
        <div className="row">
          {
            this.props.dramas.map((item, index) => (
              <div className="wrap" key={ index }>
                <VideoWrap video={ item } theme= { this.props.theme } />
              </div>
            ))
          }
        </div>
        <style jsx>{`
          div:first-child {
            height: 100%;
          }
          .wrap {
            width: 20%;
          }
          @media (max-width: 991px) {
            .wrap {
              width: 100%;
            }
          }
          @media (min-width: 1921px) {
            .wrap {
              width: 25%;
            }
          }
        `}</style>
      </div>
    ) 
  }
}

export default connect(
  (state) => ({
    dramas: state.getIn(['dramaReducer', 'dramas']),
    error: state.getIn(['dramaReducer', 'error'])
  }),
  (dispatch) => ({
    loadDramas: () => {
      return dispatch(loadDramas());
    }
  })
)(DramaList)
