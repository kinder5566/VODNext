import css from 'styled-jsx/css'

export default (video, theme) => ( css.resolve`
  .wrap {
    width: 100%;
    padding: 25px 0 25px 0;
  }

  .imageWrap {
    width: 70%;
    position: relative;
    padding-top: 100%;
  }

  .imageLink {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background-image: url(${ video.thumb });
    background-size: cover;
    color: white;
    transition: transform .2s;
  }

  .imageLink:hover {
    transform: scale(1.05);
    border: 3px solid rgba(${ theme.headerColor }, 1);
  }

  .textLink {
    padding-top: 7px;
  }

  span {
    position: absolute;
    bottom: 0;
    padding: 8px 0 5px 1px;
    width: 100%;
    background: linear-gradient(0deg, #1a1a1a, transparent);
  }
`)
