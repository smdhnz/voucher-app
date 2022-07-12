import { atom, useRecoilState } from 'recoil'

const currentRouteState = atom({
  key: 'currentRouteState',
  default: 'add_voucher'
})

export const useCurrentRoute = () => useRecoilState(currentRouteState)

