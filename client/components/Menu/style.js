import css from 'styled-jsx/css'

export default (theme) => ( css.resolve`
  ul {
    list-style-type: none;
    padding: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgba(${ theme.backgroundColor }, 0.8);
  }

  li {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(${ theme.backgroundColor }, 1);
  }

  li.empty {
    visibility: hidden;
  }

  a {
    display: inline-block;
    width: 90%;
    height: 100%;
    padding-left: 10%;
    color: rgba(${ theme.color }, 1);
  }

  a:hover, a:active, a.active {
    background-color: rgba(${ theme.backgroundColor }, 0.5);
    color: rgba(${ theme.hoverColor }, 1);
  }
  
  @media (min-width: 1921px) {
    li {
      height: 150px;
      line-height: 150px;
      font-size: 2vw;
    }
  }
`)
