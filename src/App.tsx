import { Flex } from '@chakra-ui/react'
import { Sidebar } from 'components/Sidebar'
import { Content } from 'components/Content'

export const App: React.FC = () => {
  return (
    <Flex>
      <Sidebar />
      <Content />
    </Flex>
  )
}

