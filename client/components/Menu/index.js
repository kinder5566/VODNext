import Style from './style'

import { Link } from '../Routes'

export default class extends React.Component {

  static defaultProps = {
    menu: []
  }

  constructor(props) {
    super(props);
    this.state = { 
      active: ''
    }
  }

  componentDidMount() {
    for(const item of this.props.menu) {
      if (window.location.href.indexOf(item.pattern) > 0) {
        this.setState({ active: item.pattern })
        break
      }
    }
  }

  handleMenuClick(e, item) {
    if (this.props.onMenuClick) {
      this.props.onMenuClick(item)
    }
    this.setState({ active: item.pattern })
  }

  render() {
    const { className, styles } = Style(this.props)

    return (
      <ul className={ className }>
        {
          this.props.menu.map((item, index) => (
            <li className={ className } key={ index }>
              <Link route={item.id} params={item.params}>
              <a className={ (this.state.active === item.pattern ? 'active ': '') + className }
                onClick={ e => this.handleMenuClick(e, item) }>
                { item.title }
              </a></Link>
            </li>
          ))
        }
        <li className={ `${ className } empty` } />
        { styles }
      </ul>
    ) 
  }
}
