import { createGlobalStyle } from 'styled-components'
import fonts from 'theme-library/Layout/Fonts/Fonts'
import { Fontsize } from 'theme-library/Layout/AppHeader/Components/FontIncrease'

export const GlobalStyle = createGlobalStyle`
 ${fonts()}
 /* body {
   font-size:  ${Fontsize as any}px !important;  // Use props.count
  } */
 :root{
    --fontsize: 0.9rem;
    --darkbg:#444054;
 }
 .bg-color{ background:var(--darkbg) }
body{ font-size:var(--fontsize)}
.line-scale > div{  background-color:#333; height:20px; width:2px}
.read-row{ background:#fdf1d3!important}
.ReactCollapse--collapse{transition:height .3s ease}
/* .ui-theme-settings{ display:none} */
.MuiDataGrid-toolbarContainer{ background:#f1f1f1; padding:0!important}
.MuiButtonBase-root { color:#000; padding:0.1!important; padding-left:0.5rem!important}
.cam_title_hide label{ display:none}
:not(:root):fullscreen::backdrop{ background:#fff}
.MuiDataGrid-toolbarContainer{ justify-content:right; background:#f5ead5}
.MuiDataGrid-toolbarContainer .MuiButtonBase-root.MuiButton-root.MuiButton-text{ padding:0.06rem!important; font-size:0.8rem; font-weight:600}
.tabpanelHeading{ background:#f5ead5; text-align:center; font-weight:700!important; color:rgba(18, 21, 78, 0.7)}
.intructionTxt{ font-size:0.7rem; line-height:1rem; font-weight:500}
.intructionTxt ul{ margin:0;}
/* .closed-sidebar .app-sidebar .app-sidebar__inner .menuText,
.closed-sidebar .app-sidebar .app-sidebar__inner .MuiAccordionSummary-expandIconWrapper,
.closed-sidebar .app-sidebar .app-sidebar__inner .MuiCollapse-root{ display:none}
.closed-sidebar .app-sidebar .app-sidebar__inner .MuiAccordionSummary-content{ display:block}
.closed-sidebar .app-sidebar .app-sidebar__inner .menuIcons{ display:block; width:100%} */

.mainmenulist{ position:relative; width:100%;}
.hidemenus{ width:260px}

.css-t89xny-MuiDataGrid-columnHeaderTitle{
  font-weight: 700 !important;
}

.hintHeading{ white-space:initial; word-break:inherit; word-wrap:inherit }
small, .small{ font-size:0.8rem}
@media only screen and (max-width: 767px) {
  .mobileCenterLogo{ margin:auto }
}

`
