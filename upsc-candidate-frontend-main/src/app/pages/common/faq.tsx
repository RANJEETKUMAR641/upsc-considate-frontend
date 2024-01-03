import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { data } from 'app/assets/json/faq'
import { StepStyle } from './components/Step.style'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import QuizIcon from '@mui/icons-material/Quiz'
import AdsClickIcon from '@mui/icons-material/AdsClick'
import { LoginNewStyle } from './pageStyles/LoginNew'
import { Container } from 'reactstrap'

export default function Faq() {
  return (
    <>
      <StepStyle>
        <Container fluid className="p-sm-0 pe-sm-2 mb-4">
          <Card variant="outlined" sx={{ border: 'none' }}>
            <CardContent className="p-0">
              <Typography
                component="h2"
                className="pt-3 pb-3 ps-3 mb-0 text-white"
                style={{
                  background: 'var(--darkbg)',
                  fontWeight: '700',
                }}
              >
                <QuizIcon className="me-2 text-warning" />
                Technical Frequently Asked Questions (FAQs) for Filling of
                Online Application Form
              </Typography>
              <Typography
                component="h3"
                className="pt-3 pb-3 ps-3 mb-0 text-white"
                style={{
                  background: 'var(--darkbg)',
                  fontWeight: '700',
                }}
              >
                <AdsClickIcon className="me-2 text-warning" /> Click on (
                <ExpandMoreIcon />) Signature for Answers to your Queries :
              </Typography>
              {data.map((i) => {
                return (
                  <Accordion
                    sx={{
                      margin: '1px!important',
                      boxShadow: 'none',
                      borderTop: '1px solid #e7e7e7',
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        minHeight: '30px!important',

                        '.MuiAccordionSummary-content': {
                          margin: '0px !important',
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: '.95rem' }}>
                        <b>{i.title}</b>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      style={{ borderTop: '1px solid #e7e7e7' }}
                    >
                      <Typography>
                        <div dangerouslySetInnerHTML={{ __html: i.body }} />
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })}
            </CardContent>
          </Card>
        </Container>
      </StepStyle>
    </>
  )
}
