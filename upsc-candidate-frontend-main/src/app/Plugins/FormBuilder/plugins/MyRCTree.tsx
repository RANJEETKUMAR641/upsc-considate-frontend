import { filter, get, map, isEmpty } from 'lodash'
import { useFormContext } from 'react-hook-form'
import { FormFeedback } from 'reactstrap'
import Tree from 'rc-tree'
import moment from 'moment'
import { createRCTreeNodes } from '../../MyForm/utils'

const motion = {
  motionName: 'node-motion',
  motionAppear: false,
  onAppearStart: () => ({ height: 0 }),
  onAppearActive: (node) => ({ height: node.scrollHeight }),
  onLeaveStart: (node) => ({ height: node.offsetHeight }),
  onLeaveActive: () => ({ height: 0 }),
}

const MyRCTree = (props: any) => {
  const {
    formState: { errors },
    setValue,
  } = useFormContext()

  const filterOptions = filter(
    get(props, 'selectorOptions', []),
    ({ field }) => field === props?.field,
  )?.[0]?.options

  return isEmpty(filterOptions) ? (
    <span>{moment(props?.values?.[props?.field]).format('dd/MM/yyyy')}</span>
  ) : (
    <div>
      <div className="animation">
        <Tree
          draggable={false}
          showIcon={false}
          showLine
          checkable
          motion={motion}
          defaultExpandAll
          onCheck={(_, selectedNodes) => {
            const childNodes = selectedNodes.checkedNodes?.filter((item) => {
              return (
                item?.children?.length === 0 || item?.children === undefined
              )
            })

            setValue(
              props.field,
              map(childNodes, ({ key }) => key),
            )
          }}
        >
          {createRCTreeNodes(filterOptions)}
        </Tree>
      </div>
      {errors?.[props?.field] && <FormFeedback>Required</FormFeedback>}
    </div>
  )
}

export default MyRCTree
