import { connect } from "react-redux"
import Cookies from 'universal-cookie';
import ReactPlayer from 'react-player'

import Menu from '../client/components/Menu'
import { loadDrama } from '../client/containers/Drama/actions'

class DramaDetail extends React.Component {

  static getInitialProps({ query }) {
    return { query }
  }

  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  componentDidMount() {
    const self = this
    this.props.loadDrama(this.props.query.id, this.props.query.episode)
    window.onbeforeunload = function(e) { self.saveHistory() }
  }

  componentWillUnmount() {
    this.saveHistory()
    window.removeEventListener('beforeunload', this.saveHistory)
    window.onbeforeunload = function(e) { return true }
  }

  saveHistory(e){
    if (!this.props)
      return
    const cookies = new Cookies()
    let history = cookies.get('history') || {}
    history[this.props.query.id] = {
      e: this.props.query.episode,
      t: Math.floor(this.player.current.getCurrentTime())
    }

    const current = new Date()
    current.setFullYear(current.getFullYear() + 1) 
    cookies.set('history', history, { 
      path: '/', 
      expires: current
    })

    return true;
  }

  genEpisodeMenu(count) {
    const episodeMenu = []
    if (count != 0) {
      for (let i = 1; i <= count; i++) {
        episodeMenu.push({
          id: "dramadetail",
          pattern: `${encodeURIComponent(this.props.query.id)}/${i}`,
          params: {
            id: this.props.query.id,
            episode: i
          },
          title: `第${i}集`
        })
      }
    }
    return episodeMenu
  }

  handlePlayerPlay = (e) => {
    this.saveHistory()
  }

  handleClickEpisode = (item) => {
    this.props.loadDrama(item.params.id, item.params.episode)
  }
  
  render() {
    const { query, theme } = this.props
    const drama = this.props.drama.toJS()
    const episodeMenu = this.genEpisodeMenu(drama.count)
    const historyTime = drama.history.e == query.episode ? drama.history.t : 0
    return (
      <div>
        <h1>{ `${query.id} 第${query.episode}集` }</h1>
        <section className="row"> 
          <div className="video-div">
            <ReactPlayer className="player" width="100%" height="100%"
              ref={ this.player }
              url={ `${drama.url}#t=${historyTime}` }
              onPlay={ this.handlePlayerPlay }
              controls />
          </div>
          <div className="menu-div">
            <Menu menu={ episodeMenu } backgroundColor={ theme.menuBackgroundColor }
              color={ theme.menuColor } hoverColor={ theme.menuHoverColor }
              onMenuClick={ this.handleClickEpisode } />
          </div>
        </section>
        <style jsx>{`
          .row {
            position: relative;
          }
          .video-div {
            width: 75%;
            height: 50%;
          }
          .menu-div {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            margin: 0 20px 4px 10px;
            width: 20%;
            overflow-y: auto;
          }
          ::-webkit-scrollbar {
            width: 7px;
          }
          ::-webkit-scrollbar-track {
            -webkit-border-radius: 10px;
            border-radius: 10px;
            background: rgba(${ theme.menuBackgroundColor }, 0.8);
          }
          ::-webkit-scrollbar-thumb {
            -webkit-border-radius: 4px;
            border-radius: 4px;
            background: rgb(${ theme.menuBackgroundColor });
          }
          @media (max-width: 991px) {
            .video-div {
              width: 100%;
            }
            .menu-div {
              position: relative;
              margin: 15px 0 15px 0;
              width: 100%;
            }
          }
        `}</style>
      </div>
    ) 
  }
}

export default connect(
  (state) => ({
    drama: state.getIn(['dramaReducer', 'drama']),
    error: state.getIn(['dramaReducer', 'error'])
  }),
  (dispatch) => ({
    loadDrama: (id, episode) => {
      return dispatch(loadDrama(id, episode))
    }
  })
)(DramaDetail)
