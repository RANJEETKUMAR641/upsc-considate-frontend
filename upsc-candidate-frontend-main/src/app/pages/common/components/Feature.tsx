import { Typography } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'
import InfoIcon from '@mui/icons-material/Info'

export default function Features() {
  return (
    <>
      <Card variant="outlined" sx={{ border: 'none' }}>
        <CardContent className="p-0">
          <Typography
            component="h2"
            className="pt-3 pb-3 ps-3 text-white"
            style={{
              background: 'var(--darkbg)',
              fontWeight: '700',
            }}
          >
            <InfoIcon className="me-2 text-warning" />
            One Time Registration Benefits:
          </Typography>
          <div className="pt-3">
            <ul>
              <li>
                <span>
                  Application needs to fill personal details only once.
                </span>
              </li>
              <li>
                <span>Applicant needs to upload document, if required.</span>
              </li>
              <li>
                <span>
                  OTR Information is digitally available anytime anywhere.
                </span>
              </li>
              <li>
                <span>
                  OTR Information get automatically populated while applying
                  under any Commission's Notification.
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
      <Card variant="outlined" className="mt-3 mb-3">
        <CardContent className="p-0">
          <Typography
            component="h2"
            className="pt-3 pb-3 ps-3 text-white"
            style={{
              background: 'var(--darkbg)',
              fontWeight: '700',
            }}
          >
            <InfoIcon className="me-2 text-warning" />
            How to apply for Online Application?
          </Typography>
          <div className="pt-3">
            <ul>
              <li>
                <span>
                  Candidate has to register himself/ herself on OTR (One Time
                  Registration) portal by Clicking the{' '}
                  <b>One Time Registration (OTR)</b> Link.
                </span>
              </li>
              <li>
                <span>
                  After registration, he/she has to login (by Email / Phone /
                  OTR-ID) with password to verify the already registered OTR
                  application.
                </span>
              </li>
              <li>
                <span>
                  Go to the <b>Latest Notification</b> tab in the OTR
                  application.
                </span>
              </li>
              <li>
                <span>Apply for desirable Examination.</span>
              </li>
              <li>
                <span>
                  Candidate can check active examination Notification (in
                  English and Hindi) on URL:{' '}
                  <a
                    href="https://www.upsc.gov.in"
                    target="_blank"
                    className="text-warning"
                  >
                    <strong>https://www.upsc.gov.in</strong>
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
