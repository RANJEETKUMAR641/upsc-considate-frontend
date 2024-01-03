import { Container, Row, Col } from 'reactstrap'
import { HeaderPublicStyle } from './HeaderPublic.style'

function PublicFooter() {
  return (
    <HeaderPublicStyle>
      <div className="footer">
        <Container fluid>
          <Row>
            <Col sm={9}>
              <p>
                Website Content Managed and Owned by Union Public Service
                Commission, New Delhi, India.
              </p>
            </Col>
            <Col className="footertextalign">
              <p className="">Your System IP Address :</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footerSpace" />
    </HeaderPublicStyle>
  )
}

export default PublicFooter
