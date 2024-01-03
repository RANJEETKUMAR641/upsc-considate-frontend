import { useState } from 'react'
import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import InfoIcon from '@mui/icons-material/Info'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import DashboardIcon from '@mui/icons-material/Dashboard'
import { StepStyle } from './Step.style'

const steps = [
  {
    id: 1,
    icon: AppRegistrationIcon,
    heading: 'Registration',
    subHeading: 'Applicant can submit his/her following details:',
    des: "<ul class='mb-0'><li>Candidate Name</li><li>Father's Name </li><li>Mother's Name</li><li>Date of Birth</li><li>Place of Birth</li><li>Gender</li><li>Class X Board Examination Roll No</li> <li>E-mail Address (to be used as Login ID)</li><li>Mobile Number (to be used as Login ID)</li> <li>Registration Id (to be used as Login ID)</li> <li>Security Question 1</li><li>Security Answer 1</li><li>Security Question 2</li><li>Security Answer 2</li><li>Password</li><li>Confirm Password</li><li>Captcha</li></ul>",
  },
  {
    id: 2,
    heading: 'Already Registered',
    icon: HowToRegIcon,
    subHeading:
      'Applicant can login his/her account using registered Email / Phone / OTR-ID as Login ID through Password:',
    des: '<ul class="mb-0"> <li>Login ID as Email through OTP</li><li>Login ID as Phone through OTP</li><li>Login ID as One Time Registration ID (OTR ID) through Password</li></ul>',
  },
  // {
  //   id: 3,
  //   heading: 'Verification',
  //   icon: CheckCircleOutlineIcon,
  //   subHeading:
  //     'An applicant needs to verify his/her details which he/she gave during the One Time Registration:',
  //   des: "<ul> <li>Name</li><li>Full Name</li><li>Gender - (if you want to change, you can edit the Gender at the time of verification)</li><li>Date of Birth</li><li>Father's Name</li><li>Mother's Name</li><li>Minority - (if you want to change, you can edit the Minority status at the time of verification)</li><li>Mobile</li><li>Alternate Mobile - (if you want to change, you can edit the Alternate Mobile at the time of verification)</li><li>Email ID</li><li>Alternate Email ID - (if you want to change, you can edit the Alternate Email ID at the time of verification)</li><li>Board Examination Roll No (Class X)</li><li>Set New Password</li></ul>",
  // },
  {
    id: 4,
    heading: 'Dashboard',
    icon: DashboardIcon,
    subHeading:
      'Applicant can fill and view his/her application status of every steps on dashboard:',
    des: `<ul class="mb-0"> <li>Profile</li><li>Community</li><li>Physically Challenged</li><li>Age Relaxation (Add.)</li><li>Apply to<a href=${window?.location?.origin}/posts> /posts</a></li><li>Check Application Submission Status</li></ul>`,
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
      {/* <Card variant="outlined" sx={{ border: 'none' }}>
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
            Steps for Applicants
          </Typography>
          <div className="pt-3 pb-3">
            <ul className="mb-0">
              <li>
                <span> Registration</span>
              </li>
              <li>
                <span> Already Registered</span>
              </li>
              <li>
                <span> Dashboard</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card> */}
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
            <InfoIcon className="me-2 text-warning" />
            Important Instructions for Filling Registration Form:
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
                    <Typography sx={{ fontSize: '0.95rem' }}>
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
