import styled from 'styled-components'
import { StyleConstants } from 'styles/StyleConstants'
import { Button } from 'reactstrap'
import { useEffect, useState } from 'react'
import AppLogo from 'theme-library/Layout/AppLogo'

export function NotFoundPage() {
  const [pageUrl, setPageUrl] = useState('')
  useEffect(() => {
    setPageUrl(window.location.pathname)
  }, [])
  return (
    <>
      <Wrapper>
        <Main>
          <div style={{ marginLeft: '-0.6rem', marginTop: '-3rem' }}>
            <AppLogo />
          </div>
          <Title>
            <Exclamation className="text-warning">
              <i className="fa fa-exclamation-triangle" />
            </Exclamation>{' '}
            Page not found
          </Title>
          <P>The requested URL {pageUrl} was not found</P>
          <Button
            className="mt-3"
            color="warning"
            outline
            onClick={() => {
              location.href = '/'
            }}
          >
            Go To Homepage
          </Button>
        </Main>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  height: calc(100vh - ${StyleConstants.NAV_BAR_HEIGHT});
  display: flex;
  align-items: center;
  min-height: 320px;
  margin: 0 auto;
`

const Title = styled.div`
  font-weight: bold;
  color: ${(p) => p.theme.text};
  font-size: 1.375rem;
`
const P = styled.div`
  color: ${(p) => p.theme.text};
  font-size: 0.75rem;
`
const Exclamation = styled.span``
const Main = styled.div`
  padding: 0.2rem;
  margin: 0 auto;
`
