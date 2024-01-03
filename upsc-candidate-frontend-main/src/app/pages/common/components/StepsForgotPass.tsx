import { useState } from 'react'

import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import InfoIcon from '@mui/icons-material/Info'
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare'
const steps = [
  {
    id: 1,
    heading: 'Through Email',
    icon: ForwardToInboxIcon,
    des: '<ul class="mb-0"><li>Enter The Email Address</li><li>Click on Send OTP</li><li>A timer will start<li>Enter OTP and Verify OTP</li><li>If OTP expired/not matched you can resend it after timer closed</li><li>Enter New Password and Confirm Password</li><li>Click On Submit button</li></ul>',
  },
  {
    id: 2,
    heading: 'Through Mobile',
    icon: MobileScreenShareIcon,
    des: '<ul class="mb-0"><li>Enter The Mobile Number</li><li>Click on Send OTP</li><li>A timer will start</li><li>Enter OTP and Verify OTP</li><li>Enter New Password and Confirm Password</li><li>If OTP expired/not matched you can resend it after timer closed</li><li>Click On Submit button</li></ul>',
  },
]

export default function StepsForgot() {
  const [expanded, setExpanded] = useState<string | false>(
    `panel${steps[0].id}`,
  )

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  return (
    <Card variant="outlined" className="mb-3">
      <CardContent className="p-0">
        <Typography
          component="h2"
          className="pt-3 pb-3 ps-3 mb-0 text-white"
          style={{
            background: 'var(--darkbg)',
            fontWeight: '700',
          }}
        >
          <InfoIcon className="me-2 text-warning" />
          Steps To Reset Password
        </Typography>
        {steps.map((data) => {
          const { id, heading, des, icon: MICon } = data
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
                      {/* {subHeading} */}
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
  )
}
