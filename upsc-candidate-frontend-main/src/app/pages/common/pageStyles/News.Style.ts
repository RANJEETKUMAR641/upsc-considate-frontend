import styled from 'styled-components'

export const NewStyle = styled('div')`
  .newsbox ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .newsbox li {
    padding: 15px;
    background: #e7eef8;
    box-shadow: 0 2px 0.5px rgba(11, 20, 26, 0.13);
    margin-bottom: 5px;
  }
  .newsbox li p {
    margin: 0;
    padding: 0;
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
