/*
 * Create
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const CreateNotice = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const columnUICB = useCallback((args) => {
    return args.valueFormatted
  }, [])

  const validateCategory = useCallback(
    (category, maleCategory, categoryLabel) => {
      if (Number(category) < Number(maleCategory)) {
        methods.setError(`m_${categoryLabel}`, {
          message: `Male ${categoryLabel} should be less than ${categoryLabel}`,
        })
      } else if (Number(maleCategory) < Number(category)) {
        methods.clearErrors(`m_${categoryLabel}`)
      }
    },
    [],
  )

  const handleVacancyValidation = useCallback(
    (values) => {
      const {
        gen,
        obc,
        sc,
        st,
        ph,
        ews,
        m_gen,
        m_obc,
        m_sc,
        m_st,
        m_ph,
        m_ews,
      } = values

      validateCategory(gen, m_gen, 'gen')
      validateCategory(obc, m_obc, 'obc')
      validateCategory(sc, m_sc, 'sc')
      validateCategory(st, m_st, 'st')
      validateCategory(ph, m_ph, 'ph')
      validateCategory(ews, m_ews, 'ews')
    },
    [validateCategory],
  )

  const handleOnFormChange = useCallback((values) => {
    handleVacancyValidation(values)
  }, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="posts_ora_filter"
        formId="posts_ora"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
        columnUICB={columnUICB}
        showSection={true}
        pluginProps={{
          listInitData: {
            post_type: 'o',
          },
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default CreateNotice
