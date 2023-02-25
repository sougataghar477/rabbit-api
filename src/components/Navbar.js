import { Flex, Spacer,Container, Box } from '@chakra-ui/react';
import Link from 'next/link';
function Navbar(){

    return  <Box bg="blackAlpha.900">

    <Flex p={5} color={"white"} maxW="1200px" mx={'auto'}>
        <Link href='/'>Rabbit API</Link>
        <Spacer/>
        
        <Flex columnGap={5}>
        <Link href='/submit-image'>Submit images</Link>
        <Link href='/docs'>Docs</Link>
        </Flex>

    </Flex>
    </Box>

}
export default Navbar;