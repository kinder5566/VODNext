import css from 'styled-jsx/css'

export default css.global`
  * {
    font-family: Arial, 微软雅黑;
    margin: 0;
  }

  html, body, body > div:first-child, #__next, #__next > div:first-child  {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin: 20px 0 20px 0;
  }

  .clearfix {
    clear: both;
  }

  .clearfix::after {
    display: block;
    clear: both;
    content: "";
  }

  @media (min-width: 1921px) {
    .percentHeight::before {
      content: '';
      display: inline-block;
      height: 100%;
      vertical-align: middle;
      margin-right: -0.25em;
    }
  }
`
