/** * * Asynchronously loads the component for
TabPanel
* */ import { lazyLoad } from 'utils/loadable'
export const TabPanel = lazyLoad(
  () => import('./index'),
  (module) => module.TabPanel,
)
