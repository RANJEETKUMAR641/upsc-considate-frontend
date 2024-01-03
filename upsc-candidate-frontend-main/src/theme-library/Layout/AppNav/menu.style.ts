import styled from 'styled-components'

export const MenuStyle = styled('div')`
  .MuiAccordionSummary-root,
  .MuiAccordionSummary-root.Mui-expanded {
    min-height: 40px;
  }
  .MuiAccordionSummary-root.Mui-expanded {
    background: rgba(255, 255, 255, 0.1);
  }
  .MuiAccordionSummary-content .menuText {
    display: inline-block;
    margin-left: 5px;
    color: #fff !important;
  }
  .MuiAccordionSummary-content .menuIcons {
    display: inline-block;
    width: 30px;
    font-size: 20px;
    text-align: center;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.5);
  }

  .Mui-expanded.MuiAccordionSummary-content {
    margin: 0px 0 !important;
  }

  .MuiPaper-root {
    background: transparent;
    color: rgba(255, 255, 255, 0.6);
    border: none;
    box-shadow: none;
    min-height: 40px;
  }
  .MuiAccordionSummary-expandIconWrapper {
    color: rgba(255, 255, 255, 0.6);
  }
  .MuiAccordionDetails-root {
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 44px;
  }
  .MuiAccordionDetails-root:before {
    position: absolute;
    left: 22px;
    top: -10px;
    bottom: -10px;
    background: rgba(255, 255, 255, 0.3);
    content: '';
    width: 3px;
  }
  .MuiAccordionDetails-root a {
    margin: 14px 0;
    display: block;
  }
  .MuiAccordionDetails-root a span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
  }
  .MuiListItemText-root {
    margin: 0;
    position: relative;
  }
  .MuiListItemText-root:before {
    top: -4px;
    position: absolute;
    bottom: -4px;
    left: -20px;
    right: 0;
    content: '';
  }
  .MuiAccordionDetails-root a.active .MuiListItemText-root:before {
    background: rgba(255, 255, 255, 0.1);
  }
`
