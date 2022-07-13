import { Box, Collapse } from '@chakra-ui/react'
import { useCurrentRoute } from 'state/currentRouteState'
import { AddVoucher } from 'routes/AddVoucher'
import { Statistics } from 'routes/Statistics'

export const Content: React.FC = () => {
  const [currentRoute] = useCurrentRoute()

  return (
    <Box h='200vh' p='70px'>
      <Collapse in={'add_voucher' === currentRoute} animateOpacity>
        <AddVoucher />
      </Collapse>
      <Collapse in={'statistics' === currentRoute} animateOpacity>
        <Statistics />
      </Collapse>
    </Box>
  )
}

