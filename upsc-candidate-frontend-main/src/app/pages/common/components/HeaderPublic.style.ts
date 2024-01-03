import styled from 'styled-components'

export const HeaderPublicStyle = styled('div')`
  .navbar {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
  .headerHeight {
    height: 60px;
  }
  .app-header__logo {
    width: 200px;
  }
  .nav-item {
    font-size: 0.88rem;
    margin: 0 0.1rem;
  }

  .nav-item a {
    font-weight: 700;
    padding: 5px 10px;
    color: var(--darkbg) !important;
    border-radius: 2px;
  }

  .nav-item a.active,
  .nav-item a:hover {
    background: var(--darkbg);
    color: var(--bs-warning) !important;
  }

  .fontincreseBox button {
    padding: 0 1px;
    margin: 0 1px;
    font-size: 0.75rem;
    border-radius: 2px !important;
  }
  .rightLogo {
    display: flex;
    align-items: center;
  }
  .rightLogo img {
    height: 50px;
    margin-top: 0px;
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--darkbg);
    color: #fff;
    padding: 10px 0;
    z-index: 9999;
  }
  .footer p {
    margin: 0;
  }
  .footerSpace {
    height: 50px;
  }
  .footertextalign {
    text-align: right;
  }
  @media screen and (max-width: 1024px) {
    .nav-item a {
      display: block;
      text-align: center;
      font-size: 0.7rem;
    }
    .nav-item a span {
      display: block;
    }
    .nav-item a svg {
      margin-right: 0 !important;
    }
  }
  @media screen and (max-width: 767px) {
    .navbar-light .navbar-toggler {
      border-color: var(--darkbg);
      padding: 0.25rem 0.25rem;
    }
    .navbar-text .rightLogo {
      padding: 10px 10px;
      background: #fff;
      margin: 0 auto;
      flex-direction: row;
      justify-content: space-between;
    }
    .nav-item a {
      text-align: left;
      display: block;
      color: var(--bs-light) !important;
    }
    .nav-item a span {
      display: inline-block;
    }
    .navbar-collapse {
      position: absolute;
      left: 0;
      right: 0;
      background: var(--bs-focus);
      top: 60px;
      z-index: 9999;
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    }
    .footer {
      position: relative;
    }
    .footerSpace {
      height: 0;
    }
    .footertextalign {
      text-align: left;
    }
  }
`
