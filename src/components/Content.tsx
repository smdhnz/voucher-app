import { Box, Flex, Collapse, Heading } from '@chakra-ui/react'
import { useCurrentRoute } from 'state/currentRouteState'

export const Content: React.FC = () => {
  const [currentRoute] = useCurrentRoute()

  return (
    <Box h='200vh' p='70px'>
      <Collapse in={'add_voucher' === currentRoute} animateOpacity>
        <Flex direction='column'>
          <Heading>Add Voucher</Heading>
        </Flex>
      </Collapse>
      <Collapse in={'statistics' === currentRoute} animateOpacity>
        <Flex direction='column'>
          <Heading>Statistics</Heading>
        </Flex>
      </Collapse>
    </Box>
  )
}

