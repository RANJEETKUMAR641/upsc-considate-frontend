import { map, forEach, has, isEmpty, isNil, includes, keys, get } from 'lodash'
import { hideByDiv, showByDiv } from 'utils/handleClass'
import { IMask } from 'react-imask'

export const myWatch = (methods, fields) => {
  return fields.map((field) => methods.watch(field))
}

export const myValue = (value, defaultValue = '') => {
  if (isNil(value)) return defaultValue
  return value
}

export const getSchemaColumns = ({
  fschema,
  field = '',
  sectionid = '',
  schematype = '',
}: {
  fschema: any
  field?: string
  sectionid?: string
  schematype?: string
}) => {
  let columns = {} as any
  let _fschema = fschema
  if (schematype === 'org') _fschema = fschema.orgSchema
  for (let i in _fschema?.sections) {
    if (sectionid != '') {
      if (
        _fschema?.sections[i].sectionid.toLowerCase() !==
        sectionid.toLowerCase()
      )
        continue
    }
    const _columns = _fschema?.sections[i]?.columns
    for (let column of _columns) {
      const _field = get(column, 'field')
      if (_field === field) return column
      columns[`${_field}`] = column
    }
  }
  return columns
}

export const setSchemaColumn = (fschema, field, column) => {
  if (isEmpty(fschema)) return {}
  const sections = fschema?.sections.map((section) => {
    const cols = section?.columns.map((col) => {
      if (col?.field === field) {
        return { ...column }
      }
      return col
    })
    return { ...section, columns: cols }
  })
  return { ...fschema, sections }
}

export const setColumnProp = (fschema, field, prop) => {
  let column = getSchemaColumns({ fschema, field })
  if (isEmpty(column)) return
  setSchemaColumn(fschema, field, { ...column, ...prop })
}

export const setSchemaSection = (fschema, sectionid, sectionColumns) => {
  if (isEmpty(fschema)) return {}
  const sections = fschema?.orgSchema?.sections.map((section) => {
    if (section.sectionid.toLowerCase() === sectionid.toLowerCase()) {
      return { ...section, columns: sectionColumns }
    }
    return section
  })

  return { ...fschema, sections }
}

export const fieldValues = (values) => {
  let newValues = {}
  for (let [key, v] of Object.entries(values) as any) {
    if (Array.isArray(v)) {
      let nv: any = []
      for (let d of v) {
        if (has(d, 'value')) {
          nv.push(d.value)
        } else {
          nv = v
          break
        }
      }
      v = nv
    } else if (has(v, 'value')) {
      v = v['value']
    }
    newValues[key] = v
  }
  return newValues
}

export const getNumberMask = (params) => {
  // mask as YYY 3 digit length
  const { min, max, mask } = params
  let maskPattr = {
    mask,
    blocks: {
      YY: {
        mask: IMask.MaskedRange,
        from: min,
        to: max,
      },
    },
  } as any

  return maskPattr
}

export const showHideSections = (params) => {
  let schema = {}
  const { fschema, sectionids, type } = params
  if (fschema === undefined) {
    return
  }

  forEach(sectionids, (sectionid) => {
    const fs = fschema?.sections?.filter(
      (section) => section?.sectionid === sectionid,
    )
    if (fs?.length === 0) return

    const org_cols = getSchemaColumns({ fschema, sectionid, schematype: 'org' })

    const org_requiredCols = map(
      keys(org_cols),
      (field) => org_cols[field]?.required === 1 && field,
    )
    let setRequired
    if (type === 'show') {
      showByDiv(`my-sectionId-${sectionid}`)
      setRequired = 1
    } else {
      setRequired = 0
      hideByDiv(`my-sectionId-${sectionid}`)
    }

    const sectionColumns = map(fs?.[0]?.columns, (col) => {
      if (includes(org_requiredCols, col['field'])) {
        return { ...col, required: setRequired }
      }
      return col
    })

    schema = setSchemaSection(fschema, sectionid, sectionColumns)
  })
  console.log(schema)
  return schema
}
