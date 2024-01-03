import { filter, isEqual, map, includes, values, isEmpty } from 'lodash'

const handleModuleDisplay = (module, data) => {
  if (
    isEqual(data?.app_status, 0) &&
    !isEqual(module?.app_group, 'eligibility')
  ) {
    return true
  }

  if (
    isEqual(module?.module_id, 21) &&
    isEqual(data?.validations?.fee?.fee, 0)
  ) {
    return true
  } else {
    return false
  }
}

const handleStatus = (module, statusObj) => {
  return statusObj?.[module?.candidate_formid]
}

export const handleReqModules = (data) =>
  map(
    filter(
      values(data?.validations),
      ({ title, status }) => !isEqual(status, 'ok'),
    ),
    ({ title }) => title,
  )

export const getApplicationModules = (modules, data) => {
  const visibleModules = map(modules, (item) => {
    return {
      ...item,
      isHidden: handleModuleDisplay(item, data),
      data_status: handleStatus(item, data?.formsStatus),
    }
  })

  return visibleModules.filter((item) => !item.isHidden)
}

// 0 -> ineligible (hide all app_group !== eligibility)
// 1  -> all visible
// -> application submit
// 2 full -> show final submit button

// print preview => server side.
// post_status !== open
// submit button disable on read only form
// table view remove edit
