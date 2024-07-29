import { useColorMode, Flex, Spacer, Box, Text, Image } from "@chakra-ui/react";
import {SunIcon,MoonIcon} from '@chakra-ui/icons'
import Link from "next/link";
function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box bg={colorMode === "light" ? "#2CB0FF" : "blackAlpha.900"}>
            <Flex p={5} color={"white"} maxW={"960px"} mx={"auto"}>
                <Link href="/"><Flex alignItems={'center'}><Image w={12} src='/rrrrabbit.png' /><span>Rabbit API</span></Flex></Link>
                <Spacer />

                <Flex columnGap={5} alignItems='center'>
                    <Link href="/submit-image">Submit images</Link>
                    <Link href="/docs">Docs</Link>
                    <button
                        style={{
                            fontSize: "20px",
                            transform: colorMode === 'light' ? "rotate(0deg)" : "rotate(30deg)"
                        }}
                        title="Click to toggle the mode."
                        onClick={toggleColorMode}
                    >
                        {colorMode === "light" ? <SunIcon/> :<MoonIcon/>}
                    </button>
                </Flex>
            </Flex>
        </Box>
    );
}
export default Navbar;
