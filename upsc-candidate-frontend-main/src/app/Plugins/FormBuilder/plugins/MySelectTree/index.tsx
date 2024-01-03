import { useState, useEffect } from 'react'
import { get, isEqual, map } from 'lodash'
import DropdownTreeSelect from 'react-dropdown-tree-select'
import { ReactTreeGlobalStyle } from './styles/ReactTreeStyle'
import 'react-dropdown-tree-select/dist/styles.css'

import { useFormContext } from 'react-hook-form'
import { FormFeedback } from 'reactstrap'

const MySelectTree = (props: any) => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext()

  const [selectedNode, setSelectedNode] = useState([] as any)

  useEffect(() => {
    setValue(props.field, selectedNode)
  }, [selectedNode])

  return (
    <div className={`mb-1 my-input-${props?.field}`} key={props.title}>
      <ReactTreeGlobalStyle />
      <DropdownTreeSelect
        id={props.name}
        mode={
          isEqual(get(props, 'type'), 'select') ? 'radioSelect' : 'multiSelect'
        }
        className="input-sm"
        data={[
          {
            value: 'gp_100',
            label: 'Gate Pass',
            children: [
              { value: 'gp_110', label: 'Create Gate Pass' },
              { value: 'gp_120', label: 'MIS' },
              {
                value: 'gp_190',
                label: 'Masters',
                children: [
                  { value: 'gp_192', label: 'Authorities' },
                  { value: 'gp_191', label: 'Officers' },
                ],
              },
            ],
          },
        ]}
        showDropdown="always"
        onChange={(s, currentNode) => {
          const values = map(currentNode, ({ value }) => value)

          setSelectedNode(values)
        }}
      />

      {/* <ReactTreeGlobalStyle /> */}
      {/* <Controller
        name={props?.field}
        control={props.control}
        render={({ field }) => (
          <DropdownTreeSelect
            id={props.name}
            mode={
              isEqual(get(props, 'type'), 'select')
                ? 'radioSelect'
                : 'multiSelect'
            }
            className="input-sm"
            data={[
              {
                value: 'gp_100',
                label: 'Gate Pass',
                children: [
                  { value: 'gp_110', label: 'Create Gate Pass' },
                  { value: 'gp_120', label: 'MIS' },
                  {
                    value: 'gp_190',
                    label: 'Masters',
                    children: [
                      { value: 'gp_192', label: 'Authorities' },
                      { value: 'gp_191', label: 'Officers' },
                    ],
                  },
                ],
              },
            ]}
            showDropdown="always"
            {...field}
          />
        )}
        rules={{ required: isEqual(props.required, 1) }}
        shouldUnregister={false}
      /> */}
      {errors?.[props?.field] && <FormFeedback>Required</FormFeedback>}
    </div>
  )
}

export default MySelectTree
