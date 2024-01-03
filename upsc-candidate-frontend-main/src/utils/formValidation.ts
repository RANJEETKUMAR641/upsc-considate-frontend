export const idValidation = (value, methods) => {
  const {
    photo_id_no,
    photo_id_type,
    birthcert_samename,
    dob_cert,
    foreignplace_of_birth,
    foreignplace_of_birth_other,
    hobbies,
    marital,
    namechange_cert,
    nationality,
    photo_id,
    profilephoto,
    reli,
    religion,
    signature,
    state_of_birth,
  } = value
  if (
    photo_id_no == '' &&
    photo_id_type == null &&
    birthcert_samename == null &&
    dob_cert == '' &&
    foreignplace_of_birth == '' &&
    foreignplace_of_birth_other == '' &&
    hobbies == '' &&
    marital == null &&
    namechange_cert == '' &&
    nationality == null &&
    photo_id == '' &&
    profilephoto == '' &&
    reli == null &&
    religion == '' &&
    signature == '' &&
    state_of_birth == null
  ) {
    return methods.clearErrors('photo_id_no')
  }
  if (photo_id_no === undefined || photo_id_no === null || photo_id_no === '') {
    return
  }

  let pattern
  switch (
    typeof photo_id_type === 'string' ? photo_id_type : photo_id_type?.value
  ) {
    case '1':
      pattern = /^\d{12}$/

      break
    case '3':
      pattern = /[A-Z]{5}[0-9]{4}[A-Z]{1}$/
      break
    case '6':
      pattern = /^[A-Z][A-Z0-9]{8}[0-9]$/
      break
    case '4':
      pattern = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/
      break
    case '2':
      pattern =
        /^(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))((19|20)[0-9][0-9])[0-9]{7}$/
      break
    case '5':
      pattern = /^[a-zA-Z0-9]{10}$/
      break
    default:
      return
  }
  if (pattern && !pattern.test(photo_id_no)) {
    const idTypeLabel =
      (typeof photo_id_type === 'string'
        ? photo_id_type
        : photo_id_type?.value) || ''

    const idTypeMap = {
      '1': 'Aadhar Card',
      '2': 'Driving Licence',
      '3': 'Pan Card',
      '4': 'Passport',
      '6': 'Voter ID',
      '5': 'Photo ID issued by Central/State Government',
    }

    const idTypeLabelDisplay = idTypeMap[idTypeLabel] || ''

    return methods.setError('photo_id_no', {
      message: `Invalid ${idTypeLabelDisplay} number. Please enter a valid ${idTypeLabelDisplay} number.`,
    })
  } else {
    return methods.clearErrors('photo_id_no')
  }
}

export const dateValidation = (fromDate, toDate, field, methods) => {
  if (!fromDate || !toDate) {
    return
  }

  const fromDateObj = parseDate(fromDate)
  const toDateObj = parseDate(toDate)

  if (fromDateObj >= toDateObj) {
    methods.setError(field, {
      message: 'Invalid Date. From Date Should Be Less Than To Date.',
    })
  } else {
    methods.clearErrors(field)
  }
}
const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('/')
  return new Date(`${month}/${day}/${year}`)
}

export const communityVacancyValidation = (values, methods) => {
  const { vacancy, vacancy_f, vacancy_m, vacancy_o } = values
  if (
    [vacancy, vacancy_f, vacancy_m, vacancy_o].some(
      (value) => value === undefined || value === null || value === '',
    )
  ) {
    return
  }

  const totalVacancy = Number(vacancy_f) + Number(vacancy_m) + Number(vacancy_o)

  if (totalVacancy === 0 && Number(vacancy)) {
    methods.clearErrors('vacancy')
  } else if (totalVacancy !== Number(vacancy)) {
    methods.setError('vacancy', {
      message: 'Vacancy should be equal to and zero of total genders vacancy',
    })
  } else {
    methods.clearErrors('vacancy')
  }
}
