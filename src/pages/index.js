import { Button, Container, useColorMode, Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
function Home() {
    const { colorMode, toggleColorMode } = useColorMode();
    const testCall=async ()=>{
        let a=await fetch("/api/test").then(a => a.json());
        console.log(a)
    }
    return <Container maxW={'960px'} py={[4,null,16]}>
        <Flex justifyContent="center" gap={'12px'} wrap="wrap" >

            <Box flex={1}  >
                <Text fontSize="4xl" lineHeight={1.4}>

                    An API that would serve you lots of cute pet rabbits
                </Text>
                <Box my={8}>
                                  <Text fontSize={'xl'} lineHeight='4xl'>Read our <Link href="#">docs</Link> to see how to use our API.</Text>
                <Text fontSize={'xl'} lineHeight='4xl'>You can submit photo(s) of your cute pet Rabbit here too by clicking <Link href="/submit-image">here</Link>.</Text>
             
                </Box>
     <Button onClick={testCall}>Fetch and show a new image</Button>
            </Box>
            <Box w={320} >

                <img src="https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </Box>
        </Flex>
    </Container>
}
export default Home;