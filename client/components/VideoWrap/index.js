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
    const { video, theme } = this.props
    const { className, styles } = Style(video, theme)
    return (
      <div className={ `${className} wrap` }>
        <div className={ `${className} imageWrap` }>
          <Link route='dramadetail' params={{ id: video.id, episode: 1 }}>
            <a className={ `${className} imageLink` }>
              <span className={ className }>更新至{ video.count }集</span>
            </a>
          </Link>
        </div>
        <div className={ `${className} textLink` }>
          <Link route='dramadetail' params={{ id: video.id, episode: 1 }}>
            <a className={ className }>{ video.title }</a>
          </Link>
        </div>
        { styles }
      </div>
    ) 
  }
}
