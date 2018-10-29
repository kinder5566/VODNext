import { Link } from '../Routes'

export default (props) => (
  <div>
    <Link route="index">
      <h1>{props.title}</h1>
    </Link>
    <style jsx>{`
      div {
        display: inline-block;
      }
      h1 {
        padding: 0 0 0 30px;
        cursor: pointer;
      }
    `}</style>
  </div>
)
