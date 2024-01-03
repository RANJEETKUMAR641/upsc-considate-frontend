import styled from 'styled-components'
interface Props {}

export const LoginNewStyle = styled('div')<Props>`
  .sidebar {
    position: fixed;
    background: #e7eef8;
    width: 320px;
    top: 60px;
    bottom: 0;
    padding: 5px;
    /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04); */
    border: 1px solid #cbdcf3;
  }
  .rightContent {
    margin-left: 320px;
  }
  #my-colId-email .row {
    display: block;
  }

  #my-colId-email .row .col-md-6 {
    width: 100%;
  }

  #my-colId-mobile .row {
    display: block;
  }

  #my-colId-mobile .row .col-md-6 {
    width: 100%;
  }

  .loginContainer {
    max-width: 400px;
    padding: 0 15px;
    margin: 0 auto;
  }
  .loginBox {
    background: #ffffff;
    padding: 25px;
    border: 1px solid #c3c4c7;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  }
  label {
    margin-bottom: 0;
  }
  input {
    font-size: 0.75rem;
    padding: 0 0.155rem;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-background-clip: text;
    -webkit-text-fill-color: #495057;
    transition: background-color 5000s ease-in-out 0s;
    box-shadow: inset 0 0 20px 20px #ffffffff;
  }
  .form-control:focus {
    border-color: #6c757d;
    box-shadow: none;
  }
  .loginLogo {
    background: var(--darkbg);
    padding: 15px 0 10px;
  }
  .loginLogoImg {
    max-width: 50px;
  }
  .loginHeading {
    padding: 10px 0 0;
  }
  .loginHeading h1 {
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
  }
  .loginHeading span {
    font-size: 1rem;
  }
  .recoverbtn {
    font-size: 0.9rem;
  }
  .MuiPaper-root {
    border-radius: 0;
  }
  .login_container {
    padding-top: 40px;
    padding-bottom: 15px;
  }
  button[type='submit'] {
    font-size: 0.7rem;
  }
  @media (max-width: 767px) {
    .login_container {
      padding-top: 15px;
    }
    .loginBox {
      padding: 15px;
    }
  }
  @media (max-height: 500px) {
    height: auto;
    .loginContainer {
      padding-top: 15px;
      padding-bottom: 15px;
      position: static;
      transform: translateY(0);
    }
  }
`
