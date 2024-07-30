import { useColorMode, Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";
import {SunIcon,MoonIcon} from '@chakra-ui/icons'
import Link from "next/link";
function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <>
        <Head>
        <title>Rabbit API</title>
        <meta name="description" content="Access detailed rabbit data, including breeds, care information, health tips, and more with our Rabbit API. Perfect for developers and rabbit enthusiasts."/>
  <meta name="keywords" content="Rabbit API, rabbit data, rabbit breeds, rabbit care, rabbit health, rabbit information, rabbit database, animal API, pet API, rabbit facts, rabbit species, rabbit nutrition, rabbit behavior, rabbit breeding, rabbit habitat"/>
        <link rel="icon" href='/rrrrabbit.png' />
      </Head>
        <Box bg={colorMode === "light" ? "#2CB0FF" : "#172747"}>
            <Flex p={5} color={"white"} maxW={"960px"} mx={"auto"}>
                <Link href="/"><Flex alignItems={'center'}><Image w={12} src='/rrrrabbit.png' /><span>Rabbit API</span></Flex></Link>
                <Spacer />

                <Flex columnGap={5} alignItems='center'>
                    <Link href="/submit-image">Submit images</Link>
                    <Link href="/docs">Docs</Link>
                    <button
                        style={{
                            fontSize: "20px",
                          
                        }}
                        title="Click to toggle the mode."
                        onClick={toggleColorMode}
                    >
                        {colorMode === "light" ? <SunIcon/> :<MoonIcon/>}
                    </button>
                </Flex>
            </Flex>
        </Box>
        </>
    );
}
export default Navbar;
