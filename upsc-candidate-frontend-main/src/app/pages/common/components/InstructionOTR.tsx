import { useState } from 'react'
import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { StepStyle } from './Step.style'

const steps = [
  {
    id: 1,
    icon: AppRegistrationIcon,
    heading: 'Instructions',
    subHeading: '',
    des: `<ol class='mb-0'>
    <li>One Time Registration is mandatory for applying online for various examination of UPSC.</li>
    <li>Register once in OTR and apply for any examination advertised by the UPSC in future.</li>
    <li>One Time Registration (OTR) is not an application for any examination. It is just a collection of information from the applicants and giving a separate dashboard to each applicant to facilitate them to maintain their own profile.</li>
    <li>Valid active Email ID and Mobile Number are mandatory for One Time Registration (OTR).</li>
    <li>The candidate will have to change his/her password in One Time Registration (OTR).</li>
    <li>The candidate who wishes to apply online for any examination advertised by the UPSC should use the same password given in the One Time Registration (OTR).</li>
     <li>No payment of fee is required for One Time Registration (OTR).</li>
     <li>After submitting all the details/ information successfully in the One Time Registration (OTR) a message will be sent to your registered Email ID and Mobile Number.</li>
     <li>OTR ID will be sent to your registered Email ID and Mobile Number.</li>
     <li> Multiple OTR IDs are not allowed. It may cause your application may be Rejected/Cancelled.</li>
     <li> If any correction/update/changes in data, please send to upscsoap[at]nic[dot]in with document proof.</li>
     <li>Log on to URL: <a href=${window.location.origin}/candidate/login>${window.location.origin}/candidate/login </a>to access the home page of the Online Application.</li>
     <li> Click on <a href='${window.location.origin}/candidate/otr'>New Registration </a> to register a New User for various examinations of UPSC.</li></ol>`,
  },
]

export default function Features() {
  const [expanded, setExpanded] = useState<string | false>(
    `panel${steps[0].id}`,
  )

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <StepStyle>
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
            <EditNoteIcon className="me-2 text-warning" />
            Instructions for One Time Registration (OTR)
          </Typography>

          {steps.map((data) => {
            const { id, heading, subHeading, des, icon: MICon } = data
            return (
              <>
                <Accordion
                  expanded={expanded === `panel${id}`}
                  onChange={handleChange(`panel${id}`)}
                  sx={{
                    margin: '1px!important',
                    boxShadow: 'none',
                    borderTop: '1px solid #e7e7e7',
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${id}bh-content`}
                    id={`panel${id}bh-content`}
                    sx={{
                      minHeight: '30px!important',

                      '.MuiAccordionSummary-content': {
                        margin: '0px !important',
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: '.95rem' }}>
                      <MICon className="me-2 text-warning" /> <b>{heading}</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ borderTop: '1px solid #e7e7e7' }}>
                    <div>
                      <Typography component="p" style={{ fontWeight: '700' }}>
                        {subHeading}
                      </Typography>
                      <div dangerouslySetInnerHTML={{ __html: des }} />
                    </div>
                  </AccordionDetails>
                </Accordion>
              </>
            )
          })}
        </CardContent>
      </Card>
    </StepStyle>
  )
}
