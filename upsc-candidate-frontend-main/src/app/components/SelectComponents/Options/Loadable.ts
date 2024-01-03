/** * * Asynchronously loads the component for
Options
* */ import { lazyLoad } from 'utils/loadable'
export const Options = lazyLoad(
  () => import('./index'),
  (module) => module.Options,
)
