export const getChangedValue = (values, rowData) => {
  if (!rowData) {
    return values
  }
  const changedKeys = Object.keys(values).filter((key) => {
    if (values[key] !== rowData[key]) {
      return {
        key: values[key],
      }
    }
  })

  const changedValues = changedKeys?.map((item) => {
    const changedValue = Object.assign(
      {},
      {
        [item]: values[item],
      },
    )
    return changedValue
  })

  const object = {}

  for (const item of changedValues) {
    for (const key in item) {
      object[key] = item[key]
    }
  }
  return object
}

export const isDifferent = (values: any, oldData: any): boolean => {
  if (
    values === null ||
    values === undefined ||
    oldData === null ||
    oldData === null
  ) {
    return false
  }

  // Check if the values objects have the same keys.

  if (Object.keys(values) !== Object.keys(oldData)) {
    return true
  }

  // Check if the values objects have the same values for each key.

  for (const key in values) {
    if (values[key] !== oldData[key]) {
      return true
    }
  }

  return false
}
