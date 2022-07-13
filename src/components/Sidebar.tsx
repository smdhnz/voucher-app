import { Box, Flex, Fade } from '@chakra-ui/react'
import { useCurrentRoute } from 'state/currentRouteState'
import { useLogout } from 'state/authState'

const routes = [
  { key: 'add_voucher', label: 'Add Voucher' },
  { key: 'statistics', label: 'Statistics' },
]

type ItemProps = { selected: boolean, label: string, onClick: () => void }

const Item = ({ selected, label, onClick }: ItemProps) => {
  return (
    <Box cursor='pointer' onClick={onClick}>
      <Flex gap='10px' alignItems='center'>
        <Fade in={selected} transition={{ enter: { duration: 0.6 } }}>
          <Box fontSize='20px'>👉</Box>
        </Fade>
        <Box fontSize='16px' fontWeight={selected ? 'bold' : 'normal'}>
          {label}
        </Box>
      </Flex>
    </Box>
  )
}

export const Sidebar: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useCurrentRoute()
  const logout = useLogout()

  return (
    <Box w='300px' h='100vh' bg='#18181b' p='30px' pos='sticky' top='0' left='0'>
      <Flex direction='column' gap='16px' h='100%'>
        <Box fontSize='60px'>💴</Box>
        {routes.map(route => (
          <Item 
            key={route.key}
            selected={route.key === currentRoute}
            label={route.label}
            onClick={() => setCurrentRoute(route.key)}
            />
        ))}
        <Box flexGrow='1' />
        <Box cursor='pointer' onClick={logout}>
          <Flex gap='10px' alignItems='center'>
            <Box fontSize='20px'></Box>
            <Box fontSize='16px'>Logout</Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

