import styled from 'styled-components'
interface Props {}

export const SignUpStyle = styled('div')<Props>`
  .main-card.card,
  .bg-white {
    border: none !important;
  }
  .card-header {
    background: var(--darkbg);
  }
  .card-header:before {
    display: none;
  }
  .card-header .app-sidebar__heading {
    color: #fff;
    font-size: 1rem;
    padding: 6px 0;
  }
`
