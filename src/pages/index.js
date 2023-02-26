import { useEffect, useState } from "react";
import {
    Button,
    Container,
    Box,
    Flex,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Input,Image
} from "@chakra-ui/react";
import Link from "next/link";
function Home() {
    const [breed, setBreed] = useState("");
    const [photo, setPhoto] = useState("https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    const breedCall = async () => {
        let rabbit = await fetch(`/api/breeds/${breed}`).then((a) => a.json());
        console.log(rabbit);
        setPhoto(rabbit.url);
    };
    const testCall = async () => {
        let a = await fetch("/api/random").then((a) => a.json());
        setPhoto(a.url);
    };
    return (
        <Container maxW={"960px"} py={[4, null, 16]}>
            <Flex justifyContent="center" gap={"12px"} wrap="wrap">
                <Box flex={1}>
                    <Text fontSize={["3xl","3xl","4xl"]} lineHeight={1.2}>
                        An API that would serve you lots of cute pet rabbits
                    </Text>
                    <Box my={[4,4,8]}>
                        <Text fontSize={"xl"} lineHeight="4xl">
                            Read our <Link href="#">docs</Link> to see how to
                            use our API.
                        </Text>
                        <Text fontSize={"xl"} lineHeight="4xl">
                            You can submit photo(s) of your cute pet Rabbit here
                            too by clicking{" "}
                            <Link href="/submit-image">
                                <u>here</u>
                            </Link>
                            .
                        </Text>
                    </Box>
                    <Tabs  size={"sm"} variant="enclosed-colored" maxW={"360px"}>
                        <TabList>
                            <Tab >Random</Tab>
                            <Tab>By breed</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel p={0}>
                                <Text mt={4}>
                                    Get a random image of a rabbit by clicking
                                    below
                                </Text>
                                <Button w="100%" mt={4} onClick={testCall}>
                                    Fetch and show a new image
                                </Button>
                            </TabPanel>
                            <TabPanel p={0}>
                                <Input
                                    value={breed}
                                    onInput={(e) => setBreed(e.target.value)}
                                    borderRadius={0}
                                    mt={4}
                                    placeholder="Enter breed name"
                                />
                                <Button mt={4} w="100%" onClick={breedCall}>
                                    Fetch and show a new image
                                </Button>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
                <Box h={400} w={320}>
                    <Image borderRadius='lg' src={photo} />
                </Box>
            </Flex>
        </Container>
    );
}
export default Home;
