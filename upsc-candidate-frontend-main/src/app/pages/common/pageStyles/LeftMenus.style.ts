import styled from 'styled-components'

export const LeftMenusStyle = styled('div')`
  .leftMenus {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .leftMenus li {
    margin-bottom: 5px;
    border-radius: 5px;
  }
  .leftMenus li:hover {
    background: #eff2f7;
  }
  .leftMenus li a {
    display: block;
    padding: 2px;
    border-radius: 5px;
  }
  .leftMenus li a.active {
    /* background: #e7eef8; */
    background: var(--darkbg);
  }

  .leftMenus .menuIcons {
    color: var(--darkbg);
    /* border: 1px solid var(--bs-warning); */
    display: inline-block;
    padding: 2px;
    margin-right: 2px;
    border-radius: 50%;
  }

  .menulink {
    color: var(--darkbg);
    font-weight: 700;
  }
  .leftMenus li a.active .menuIcons {
    color: #fff;
  }
  .leftMenus li a.active .menulink {
    color: #fff;
  }

  .viewMore {
    color: #ddd;
    font-weight: 400;
    float: right;
    margin-right: 5px;
  }
  .viewMore a {
    color: #ddd;
  }
  .newsArrows {
    position: absolute;
    right: -18px;
    width: 15px;
    opacity: 0.7;
  }
  .upicon {
    cursor: pointer;
    position: absolute;
    height: 13px;
    line-height: 13px;
  }
  .downicon {
    cursor: pointer;
    position: absolute;
    line-height: 13px;
    top: 13px;
    height: 13px;
  }
  /* .newsbox {
    height: 200px;
  } */
  .newsbox {
    position: relative;
  }
  .newsbox ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .newsbox ul li {
    padding: 5px 0;
    border-bottom: 1px dotted #d7d7d7;
    min-height: 90px;
    display: flex;
    align-items: center;
  }
  .newsbox ul li a {
    color: var(--darkbg);
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap;
  }
  .newsbox ul li a:hover {
    text-decoration: underline !important;
  }
  .newsbox ul li p {
    margin: 0;
  }
  .datebox {
    font-weight: 700;
  }
  .datebox .new {
    background: var(--bs-danger);
    color: #fff;
    border-radius: 5px;
    margin-right: 5px;
    display: inline-block;
    padding: 0 5px;
  }
  .date {
    background: var(--bs-warning);
    border-radius: 5px;
    padding: 0 5px;
  }
`
