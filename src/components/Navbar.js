import { useColorMode,Flex, Spacer,Container, Box, Button } from '@chakra-ui/react';
import { SunIcon,MoonIcon } from '@chakra-ui/icons';
import Link from 'next/link';
function Navbar(){
    const { colorMode, toggleColorMode } = useColorMode();
    return  <Box bg="blackAlpha.900">

    <Flex p={5} color={"white"} maxW={"960px"} mx={'auto'}>
        <Link href='/'>Rabbit API</Link>
        <Spacer/>
        
        <Flex columnGap={5}>
        <Link href='/submit-image'>Submit images</Link>
        <Link href='/docs'>Docs</Link>
        <button  onClick={toggleColorMode}>{colorMode!=='dark'?<SunIcon/>:<MoonIcon/>}</button>
        </Flex>

    </Flex>
    </Box>

}
export default Navbar;