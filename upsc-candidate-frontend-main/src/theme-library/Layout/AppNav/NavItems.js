import routes from 'config/ora.json'
import candidateRoutes from 'config/candidate.json'
import gatePass from 'config/gatepass.json'
import emedical from 'config/emedical.json'
import ebill from 'config/ebill.json'
import vms from 'config/vms.json'
import exam from 'config/exam.json'
import dairyentryadmin from 'config/dairyentryadmin.json'
import asoadmin from 'config/asoadmin.json'
import soadmin from 'config/soadmin.json'
import soadminlink from 'config/soadminlink.json'
import usadmin from 'config/usadmin.json'
import usadminlink from 'config/usadminlink.json'
import dsadmin from 'config/dsadmin.json'
import jsadminlink from 'config/jsadminlink.json'
import jsadmin from 'config/jsadmin.json'
import asadmin from 'config/asadmin.json'
import asadminfa from 'config/asadminfa.json'
import courtcase from 'config/courtcase.json'
import asoadminI from 'config/asoadminI.json'
import soadminI from 'config/soadminI.json'
import usadminom from 'config/usadminom.json'
import accountsI from 'config/accountsI.json'
import pao from 'config/pao.json'
import systemadmin from 'config/systemadmin.json'

import { get } from 'lodash'
import { getItem } from 'utils/storage'

const handleMenu = () => {
  const action = get(getItem('token'), 'user.email')
  let menu

  switch (action) {
    case 'gatepass@upsc.in':
      menu = gatePass.menu
      break
    case 'e-medical@upsc.in':
      menu = emedical.menu
      break
    case 'ora@upsc.in':
    case 'soap@upsc.in':
      menu = routes.menu
      break
    case 'e-bill@upsc.in':
      menu = ebill.menu
      break
    case 'vms@upsc.in':
      menu = vms.menu
      break
    case 'exam@upsc.in':
      menu = exam.menu
      break
    case 'dairy-entryadmin@upsc.in':
      menu = dairyentryadmin.menu
      break
    case 'asoadmin@upsc.in':
      menu = asoadmin.menu
      break
    case 'soadmin@upsc.in':
      menu = soadmin.menu
      break
    case 'soadminlink@upsc.in':
      menu = soadminlink.menu
      break
    case 'usadmin@upsc.in':
      menu = usadmin.menu
      break
    case 'usadminlink@upsc.in':
      menu = usadminlink.menu
      break
    case 'dsadmin@upsc.in':
      menu = dsadmin.menu
      break
    case 'jsadminlink@upsc.in':
      menu = jsadminlink.menu
      break
    case 'jsadmin@upsc.in':
      menu = jsadmin.menu
      break
    case 'asadmin@upsc.in':
      menu = asadmin.menu
      break
    case 'asadminfa@upsc.in':
      menu = asadminfa.menu
      break
    case 'court-case@upsc.in':
      menu = courtcase.menu
      break
    case 'asoadminI@upsc.in':
      menu = asoadminI
      break
    case 'soadminI@upsc.in':
      menu = soadminI
      break
    case 'usadminom@upsc.in':
      menu = usadminom
      break
    case 'accountsI@upsc.in':
      menu = accountsI
      break
    case 'pao@upsc.in':
      menu = pao
      break
    case 'systemadmin@upsc.in':
      menu = systemadmin
      break
    default:
      menu = candidateRoutes.menu
  }
  return menu
}

export const MainNav = handleMenu()
