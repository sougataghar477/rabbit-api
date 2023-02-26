import { useState } from "react";
import { Input,Text,Button,TabPanel,Select } from "@chakra-ui/react";
import rabbitBreeds from '../utils/rabbitBreeds';
function BreedsPanel({changePhoto}) {
    // const [breed, setBreed] = useState("");
    let [errorMsg,setMsg]=useState("");
    let [isDisabled,setDisabled]=useState(false);
    const breedCall = async (breed) => {
        setDisabled(true);
        let rabbit = await fetch(`/api/breeds/${breed}`).then((a) => a.json());
        console.log(rabbit);
        setDisabled(false);
        rabbit.url ? changePhoto(rabbit.url) :errorHandling(rabbit);
        
    };
    const errorHandling=(msg)=>{
        setMsg(msg);
        setTimeout(() => {
            setMsg("");
        }, 5000);
    }
    return (                             <TabPanel p={0}>
        <Select variant={'filled'} mt={4} placeholder='Select option' onChange={e => breedCall(e.target.value)}>
            {rabbitBreeds.map(option => 
            <option key={option} value={option}>{option}</option> )}
</Select>
        {errorMsg && <Text fontWeight={'bold'} mt={4} color='red'>{errorMsg}</Text>}
        <Button isDisabled={isDisabled} isLoading={isDisabled} mt={4} w="100%" onClick={breedCall}>
            Fetch and show a new image
        </Button>
    </TabPanel> );
}

export default BreedsPanel;