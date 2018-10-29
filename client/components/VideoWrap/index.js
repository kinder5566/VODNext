import Style from './style'

import { Link } from '../Routes'

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      active: ''
    }
  }

  componentDidMount() {
  
  }
  
  render() {
    const { video, theme, route } = this.props
    const { className, styles } = Style(video, theme)
    const routeParam = {
      id: video.id,
      episode: video.episode
    }
    return (
      <div className={ `${className} wrap` }>
        <div className={ `${className} imageWrap` }>
          <Link route={ route } params={ routeParam }>
            <a className={ `${className} imageLink` }>
              <span className={ className }>{ !video.count ? (`更新至${ video.count }集`) : null}</span>
            </a>
          </Link>
        </div>
        <div className={ `${className} textLink` }>
          <Link route={ route } params={ routeParam }>
            <a className={ className }>{ video.title }</a>
          </Link>
        </div>
        { styles }
      </div>
    ) 
  }
}
