export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  componentDidMount() {
    
  }

  render() {
    const { color, showMenu } = this.props
    return (
      <div className={ showMenu ? 'checked' : '' }>
        <span></span>
        <span></span>
        <span></span>
        <style jsx>{`
          div {
            position: relative;
            width: 35px;
            margin: 0 0 0 15px;
            cursor: pointer;
            z-index: 2;
          }
          input {
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0;
          }
          span {
            display: block;
            width: 100%;
            height: 4px;
            margin-top: 5px;
            z-index: 1;
            border-radius: 5px;
            background: rgba(${ color }, 1);
            
            transform-origin: 15% 15%;
            transition: transform 0.5s ease, opacity 0.5s ease;
          }

          div.checked span {
            transform: rotate(45deg) translate(0, -1px);
          }
          div.checked span:nth-last-child(1) {
            transform: rotate(-45deg) translate(0, -1px);
          }
          div.checked span:nth-last-child(2) {
            opacity: 0;
            transform: rotate(0deg);
          }
        `}</style>
      </div>
    ) 
  }
}
