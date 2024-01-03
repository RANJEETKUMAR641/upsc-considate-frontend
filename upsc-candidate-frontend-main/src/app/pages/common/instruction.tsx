import { Suspense } from 'react'
import { Col, Row, Container } from 'reactstrap'
import { OverlayLoader } from 'app/components/OverlayLoader'
import CandOtrFeature from './components/InstructionOTR'
import { LoginNewStyle } from './pageStyles/LoginNew'

function Instruction() {
  return (
    <LoginNewStyle>
      <Suspense fallback={<OverlayLoader open className="" />}>
        <Container fluid className="p-sm-0 pe-sm-2">
          <Row>
            <Col sm={{ size: 12, order: 1 }} className="mb-4">
              <CandOtrFeature />
            </Col>
          </Row>
        </Container>
      </Suspense>
    </LoginNewStyle>
  )
}

export default Instruction
