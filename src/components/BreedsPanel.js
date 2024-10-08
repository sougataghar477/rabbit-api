import { useState } from "react";
import { Input, Text, Button, TabPanel, Select } from "@chakra-ui/react";
import rabbitBreeds from "../utils/rabbitBreeds";
function BreedsPanel({ changePhoto }) {
    let [errorMsg, setMsg] = useState("");
    let [isLoading, setLoading] = useState(false);
    const breedCall = async (breed) => {
        if (breed.length > 0) {
            setLoading(true);
            let rabbit = await fetch(`/api/breeds/${breed}`).then((a) =>
                a.json()
            );
            setLoading(false);
            rabbit.url ? changePhoto(rabbit.url) : errorHandling(rabbit);
        } else {
            errorHandling("Please select an option");
        }
    };
    const errorHandling = (msg) => {
        setMsg(msg);
        setTimeout(() => {
            setMsg("");
        }, 5000);
    };
    return (
        <TabPanel p={0}>
            <Text mt={4}>Fetch an image of a breed by selecting an option</Text>
            <Select
                variant={"filled"}
                mt={2}
                placeholder="Select option"
                onChange={(e) => breedCall(e.target.value)}
            >
                {rabbitBreeds.map((breed) => (
                    <option key={breed} value={breed}>
                        {breed}
                    </option>
                ))}
            </Select>
            <Text fontStyle={'italic'} mt={4}>Please note that not all breeds have photos but with time it will be fulfilled.</Text>
            {isLoading && <Text fontWeight={"bold"} mt={4}>
                    Loading...
                </Text>}
            {errorMsg && (
                <Text fontWeight={"bold"} mt={4} color="red">
                    {errorMsg}
                </Text>
            )}

        </TabPanel>
    );
}

export default BreedsPanel;
