import styled from 'styled-components'
interface Props {}

export const PostStyle = styled('div')<Props>`
  background: #fff;
  margin-top: 0px;
  .postTopBtn {
    font-size: 1rem;
    font-weight: 700;
    padding: 5px 0;
  }
  .b-rightBtn {
    border-right: 1px solid #8e88a7;
  }

  .postsHeading {
    background: #f7f7f7;
    font-weight: 700;
  }
  .card-header {
    padding: 0;
  }
  .MuiDataGrid-root {
    border-radius: 0;
  }
  .app-sidebar__heading {
    width: 100%;
    text-align: center;
    background: #e7e7e7;
    padding: 0.5rem 0.5rem;
    margin: 0;
    white-space: initial;
  }
  .headingBox {
    background: #f7f7f7;
  }
  .headingBox p {
    margin: 5px 0;
    font-size: 1rem;
    font-weight: 600;
  }
  .secondBoxHeadingHide .card-header {
    display: none !important;
  }
  .applybtn a {
    font-weight: 700;
    color: rgba(18, 21, 78, 1);
  }
  .postsName a {
    font-weight: 500;
    color: rgba(18, 21, 78, 1);
  }
  .postsNo {
    font-weight: 700;
  }

  .termAndConditionBox {
    font-size: 0.8rem;
  }
  .footerBtn {
    background: #e7e7e7;

    margin-bottom: -13px;
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--darkbg);
    color: #fff;
    padding: 10px 0;
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

  .header-buttons-right {
    justify-content: flex-end;
    display: flex;
    align-items: center;
    height: 60px;
  }
  .fixed-header {
    position: relative;
    height: 60px;
  }
  .public_heder {
    height: 60px;
    position: fixed;
    width: 100%;
    background: #fff;
    z-index: 10;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  }
  .headerbtnbox a {
    display: block;
    text-align: center;
    color: #fff;
    padding: 5px 15px;
  }
  .mobileLogo {
    display: none;
  }
  .desktoplogo {
    display: block;
  }
  .vacancySection .app-sidebar__heading {
    text-align: left;
  }
  .gategoryType table td,
  .gategoryType table th {
    width: 14.2857142857;
    text-align: center;
  }
  .vacancyData {
    font-size: 0.8rem;
  }
  .vacancyData table {
    margin-bottom: 0;
  }
  .vacancyHeading {
    width: 16%;
  }
  .vacancyData .colBorder {
    border-bottom: 1px solid #e9ecef;
    padding-top: 5px;
    padding-bottom: 5px;
  }
  .vacancyData.pos_des p,
  .vacancyData.pos_des strong {
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    display: block;
  }
  .vacancyData .colBorder:first-child {
    border-right: 1px solid #e9ecef;
  }
  .myTable tr th,
  .myTable tr td {
    padding: 0.2rem 0.5rem;
  }
  @media screen and (max-width: 767px) {
    .vacancyTable table td {
      min-width: 100px;
    }
    .b-rightBtn {
      border: none;
      border-bottom: 1px solid #8e88a7;
    }
    .postTopBtn {
      font-size: 0.6rem;
    }
    .headingBox p {
      font-size: 0.75rem;
    }
    .footer {
      margin-top: 10px;
      position: relative;
    }
    .footerSpace {
      height: auto;
    }
    .footertextalign {
      text-align: left;
    }
    .footerBtn .btn {
      padding: 5px;
    }
    .fixed-header {
      position: relative;
      height: auto;
    }
    .public_heder {
      height: auto;
      position: relative;
    }
    .header-buttons-right {
      margin-top: 60px;
    }
    .headerbtnbox a {
      padding: 5px 5px;
    }
    .mobileLogo {
      display: block;
      position: fixed;
      width: 100%;
      left: 0;
      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
      background: #fff;
    }
    .desktoplogo {
      display: none;
    }
    .vacancyData {
      font-size: 0.7rem;
    }
  }
`
