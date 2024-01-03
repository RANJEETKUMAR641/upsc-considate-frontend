/**
 *
 * assistant-diary-entry
 *
 */

import React, { memo } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const CreateVanue = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const [expanded1, setExpanded1] = React.useState<boolean>(true)
  const [expanded2, setExpanded2] = React.useState<boolean>(true)

  return (
    <>
      <Accordion expanded={expanded1} onChange={() => setExpanded1(!expanded1)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Income Details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...methods}>
            <FormBuilder
              filterId=""
              formId="daf2_ews_incom"
              list={false}
              showForm={true}
              methods={methods}
            />
          </FormProvider>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded2} onChange={() => setExpanded2(!expanded2)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Home Income
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormProvider {...methods}>
            <FormBuilder
              filterId=""
              formId="daf2_ews_home"
              list={false}
              showForm={true}
              methods={methods}
            />
          </FormProvider>
        </AccordionDetails>
      </Accordion>
    </>
  )
})

export default CreateVanue
