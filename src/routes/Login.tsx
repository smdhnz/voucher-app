import React, { useState } from 'react'
import { useLogin } from 'state/authState'
import { Flex, Box, Center, Heading } from '@chakra-ui/react'
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react'

const initCredential = { username: '', password: '' }

export const Login = () => {
  const [credential, setCredential] = useState(initCredential)
  const login = useLogin()

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCredential({ ...credential, [e.currentTarget.id]: e.currentTarget.value })
  }

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    login(credential)
  }

  return (
    <Center h='100vh'>
      <Box bgColor='#18181b' w='100%' maxW='md' p='50px' rounded='xl'>
        <Flex direction='column' gap='30px' alignItems='center' as='form' onSubmit={onSubmit}>
          <Heading>🔒Login🔒</Heading>
          <FormControl>
            <FormLabel>😊Username</FormLabel>
            <Input id='username' value={credential.username} onChange={onChange} />
          </FormControl>
          <FormControl>
            <FormLabel>🔒Password</FormLabel>
            <Input id='password' value={credential.password} onChange={onChange} type='password' />
          </FormControl>
          <Button type='submit'>Submit</Button>
        </Flex>
      </Box>
    </Center>
  )
}
