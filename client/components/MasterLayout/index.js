import Header from '../Header'
import Burger from '../Burger'
import Menu from '../Menu'
import Footer from '../Footer'
import Style from './style'

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: false }
  }

  componentDidMount() {
    
  }

  handleClickToggle = e => {
    this.setState({ showMenu: !this.state.showMenu })
  }

  render() {
    const { theme, title, menu, children } = this.props;
    const { className, styles } = Style(theme)
    return (
      <div>
        <header className={ className }>
          <div className={ `${className} burger` } onClick={ this.handleClickToggle }>
            <Burger color={ theme.containerColor } showMenu={ this.state.showMenu } />
          </div>
          <Header title={ title } />
        </header>
        <main className={ `${className} clearfix` }>
          <nav className={ className + (this.state.showMenu ? ' show' : '') }>
            <Menu menu={ menu } backgroundColor={ theme.menuBackgroundColor }
              color={ theme.menuColor } hoverColor={ theme.menuHoverColor }
              onMenuClick={ this.handleClickToggle } />
          </nav>
          <div className={ `${className} container` }>
            { children }
          </div>
        </main>
        <footer className={ className }>
          <Footer />
        </footer>
        { styles }
      </div>
    ) 
  }
}
