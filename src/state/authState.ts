import { recoilPersist } from 'recoil-persist'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

const { persistAtom } = recoilPersist()

const authState = atom({
  key: 'authState',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

export const useAuth = () => {
  return useRecoilValue(authState)
}

export const useLogin = () => {
  const set = useSetRecoilState(authState)
  return (credential: { username: string, password: string }) => {
    console.log(credential)
    set(true)
  }
}

export const useLogout = () => {
  const set = useSetRecoilState(authState)
  return () => set(false)
}

