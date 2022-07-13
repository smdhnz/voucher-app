import React from 'react'
import { Flex, Collapse } from '@chakra-ui/react'
import { Sidebar } from 'components/Sidebar'
import { Content } from 'components/Content'
import { Login } from 'routes/Login'
import { useAuth } from 'state/authState'

export const App: React.FC = () => {
  const isAuth = useAuth()

  return isAuth ? (
    <Flex>
      <Sidebar />
      <Content />
    </Flex>
  ) : (
    <Login />
  )
}

