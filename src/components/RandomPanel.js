import { useState } from "react";
import { Input,Text,Button,TabPanel } from "@chakra-ui/react";
function RandomPanel({changePhoto}) {
    let [isDisabled,setDisabled]=useState(false);
    const randomCall = async () => {
        setDisabled(true);
        let rabbit = await fetch("/api/random").then((a) => a.json());
        setDisabled(false);
        changePhoto(rabbit.url)
    };
    return (

        <TabPanel p={0}>
            <Text mt={4}>
                Get a random image of a rabbit by clicking
                below
            </Text>
            <Button isDisabled={isDisabled} isLoading={isDisabled} w="100%" mt={4} onClick={randomCall}>
                Fetch and show a new image
            </Button>
        </TabPanel>);
}

export default RandomPanel;