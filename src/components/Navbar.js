import { useEffect } from "react";
import { useColorMode, Flex, Spacer, Box, Text,Image } from "@chakra-ui/react";
import Link from "next/link";
function Navbar() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box bg={colorMode === "light" ? "blue.900" : "blackAlpha.900"}>
            <Flex p={5} color={"white"} maxW={"960px"} mx={"auto"}>
                <Link href="/"><Image w={12} src='/rabbit.png' /></Link>
                <Spacer />

                <Flex columnGap={5} alignItems='center'>
                    <Link href="/submit-image">Submit images</Link>
                    <Link href="/docs">Docs</Link>
                    <button
                        style={{
                            fontSize: "20px",
                            transform: colorMode==='light'?"rotate(0deg)":"rotate(30deg)"
                        }}
                        title="Click to toggle the mode."
                        onClick={toggleColorMode}
                    >
                        {colorMode === "light" ? "🌞" : "🌛"}
                    </button>
                </Flex>
            </Flex>
        </Box>
    );
}
export default Navbar;
