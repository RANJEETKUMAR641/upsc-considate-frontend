import styled from 'styled-components'
interface Props {}

export const LoginStyle = styled('div')<Props>`
  .main-card {
    border: 0px !important;
    padding: 0px !important;
  }
  .loginSection {
    padding: 0px !important;
  }
  .loginNameBox {
    width: 100%;
    text-align: center;
    padding-top: 0.7rem;
  }
  .card-body {
    margin-top: 12px;
    margin-bottom: 12px;
  }
  .loginLogo {
    display: block;
  }
  .loginLogo img {
    width: 70px;
  }
  .loginNameBox h1 {
    font-size: 1.2rem;
    font-weight: 700;
    line-height: 1.2rem;
  }
  .loginNameBox h1 span {
    font-size: 0.6rem;
    display: block;
  }
  .logInLogoBox img {
    width: 50px !important;
  }
  .loginBox {
    padding: 0.4rem 0.4rem;
    max-width: 400px;
    margin: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    right: 15px;
    z-index: 10;
  }
  .loginSection {
    border: 1px solid #dee2e6;
    padding: 1rem 2rem;
    background: #fff;
  }

  .MuiPaper-root {
    border-radius: 0;
    border: none;
  }

  @media only screen and (max-width: 767.98px) {
    .loginBox {
      position: static;
      transform: translateY(0%);
    }
    .loginSection {
      padding: 1rem 1rem;
    }
    .loginLogo {
      display: none;
    }
    .candidatepage {
      padding: 0;
    }
    .mobileHide {
      display: none;
    }
  }

  /* Media query for viewport height less than or equal to 500px */
  @media (max-height: 500px) {
    .loginBox {
      top: 100px;
      transform: none;
    }
  }
`
