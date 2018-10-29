import { connect } from "react-redux"

import Menu from '../client/components/Menu'
import { loadDrama } from '../client/containers/Drama/actions'

class DramaDetail extends React.Component {

  static getInitialProps({ query }) {
    return { query }
  }

  componentDidMount() {
    this.props.loadDrama(this.props.query.id, this.props.query.episode)
  }

  genEpisodeMenu(count) {
    const episodeMenu = []
    if (count != 0) {
      for(let i = 1; i <= count; i++) {
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

  handleClickEpisode = (item) => {
    this.props.loadDrama(item.params.id, item.params.episode)
  }

  render() {
    const { query, url, count, theme } = this.props
    const episodeMenu = this.genEpisodeMenu(count)
    return (
      <div>
        <h1>{ `${query.id} 第${query.episode}集` }</h1>
        <section className="row"> 
          <div className="videoDiv">{
            url ? (
              <video controls>
                <source src={ `${url}#t=100` } type="video/mp4" />
              </video>) : null
          }</div>
          <div className="menuDiv">
            <Menu menu={ episodeMenu } backgroundColor={ theme.menuBackgroundColor }
              color={ theme.menuColor } hoverColor={ theme.menuHoverColor }
              onMenuClick={ this.handleClickEpisode } />
          </div>
        </section>
        <style jsx>{`
          .row {
            position: relative;
          }
          .videoDiv {
            width: 75%;
            height: 50%;
          }
          .menuDiv {
            position: absolute;
            top: 0px;
            right: 0px;
            bottom: 0px;
            margin: 0 20px 4px 10px;
            width: 20%;
            overflow-y: auto;
          }
          video {
            width: 100%;
            height: 100%;
            display: inline-block;
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
            .videoDiv {
              width: 100%;
            }
            .menuDiv {
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
    url: state.getIn(['dramaReducer', 'url']),
    count: state.getIn(['dramaReducer', 'count']),
    error: state.getIn(['dramaReducer', 'error'])
  }),
  (dispatch) => ({
    loadDrama: (id, episode) => {
      return dispatch(loadDrama(id, episode))
    }
  })
)(DramaDetail)
