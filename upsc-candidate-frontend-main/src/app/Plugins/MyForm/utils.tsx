import { TreeNode } from 'rc-tree'

export const createRCTreeNodes = (data) =>
  data?.map((item) => {
    if (item.children) {
      return (
        <TreeNode key={item.value} title={item.label}>
          {createRCTreeNodes(item.children)}
        </TreeNode>
      )
    }
    return <TreeNode key={item.value} title={item.label} />
  })
