import css from 'styled-jsx/css'

export default (theme) => ( css.resolve`
  header {
    background-color: rgba(${ theme.headerBackgroundColor }, 1);
    height: ${ theme.headerHeight }px;
    line-height: ${ theme.headerHeight }px;
    color: rgba(${ theme.headerColor }, 1);
    z-index: 1;
  }

  .burger {
    display: none;
  }
  
  main {
    position: relative;
    min-height: calc(100% - ${ theme.headerHeight }px);
    overflow:auto;
  }

  nav {
    position: absolute;
    float: left;
    width: ${ theme.menuWidth }px;
    top: 0;
    bottom: 0;
    z-index: 2;
    transition: left 0.5s ease;
  }

  .container {
    color: rgba(${ theme.containerColor }, 1);
    margin: 0 30px 0 30px;
    padding-top: 30px;
    padding-bottom: ${ theme.footerHeight }px;
    transition: padding-left 0.5s ease;
  }

  footer {
    position: fixed;
    width: 100%;
    height: ${ theme.footerHeight }px;
    line-height: ${ theme.footerHeight }px;
    left: 0;
    bottom: 0;
    z-index: 3;
    background-color: rgba(${ theme.footerBackgroundColor }, 1);
  }

  @media (max-width: 991px) {
    .burger {
      display: inline-block;
    }
    nav {
      left: -${ theme.menuWidth }px;
    }
    nav.show {
      left: 0;
    }
    .container {
      width: calc(100% - 60px);
      padding-left: 0;
    }
  }

  @media (min-width: 992px) {
    nav {
      left: 0;
    }
    .container {
      padding-left: ${ theme.menuWidth }px;
      width: calc(100% - 60px - ${ theme.menuWidth }px);
    }
  }
  
  @media (min-width: 1921px) {
    header {
      height: ${ theme.headerHeight * 2.5 }px;
      line-height: ${ theme.headerHeight * 2.5 }px;
      font-size: 1.5vw;
    }
    nav {
      width: 20%;
    }
    .container {
      padding-left: 20%;
      width: calc(80% - 4vw);
      font-size: 1vw;
      margin: 2vw;
    }
  }
`)
