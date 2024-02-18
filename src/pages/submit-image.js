import { v4 } from "uuid";
import { useState, useRef } from "react";
import { storage } from "../utils/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Link,
  Flex,useToast 
} from "@chakra-ui/react";
import {CopyIcon } from '@chakra-ui/icons'
function SubmitImage() {
  const toast=useToast();
  const fileInputRef = useRef(null);
  let [isSubmitting, setSubmitting] = useState(false);
  const [fileData, setfileData] = useState("");
  const [breed, setBreed] = useState("");
  const [returnedUrl, setUrl] = useState("");
  const resetForm = () => {
    setBreed("");
    setfileData(null);
    setSubmitting(false);
    fileInputRef.current.value = "";
  };
  const submitHandler = async () => {
    if(fileData){
      setSubmitting(true);
      let urlId = v4().split("-")[0];
      let imageRef = ref(storage, `rabbits/${urlId}`);
      uploadBytes(imageRef, fileData).then(async () => {
        let url = await getDownloadURL(imageRef);
          await fetch("/api/addrabbit", {
          method: "POST",
          mode: "cors",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ breed, urlId, url }),
        }).then((a) => a.json()).then(data =>{
          setUrl(data);
          resetForm();
          toast({
          title: 'Success.',
          description: "Your image has been uploaded.",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
        }).catch(err=> setUrl("Something went wrong.Please try again."))
      });
    }
    else{
      toast({
        title: 'Failure.',
        description: "Please select a file.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      })
    }
  };
  const copyLink=()=>{
    navigator.clipboard.writeText(returnedUrl);
    toast({
      title: 'Link copied.',
      description: "Your link has been copied.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
  return (
    <Container maxW="40ch" py={16}>
        <Text mb={2} fontSize={'2xl'}>Submit a photo of your  rabbit</Text>
      <FormControl isRequired>
        <FormLabel>Breed Name</FormLabel>
        <Input 
          placeholder="Enter breed name"
          onInput={(e) => setBreed(e.target.value)}
          value={breed}
          borderRadius={0}
          mb={6}
          type="text"
          isRequired
        />
        <FormLabel fontStyle={'italic'}>Upload a file of your rabbit 🐰</FormLabel>
        <input
          ref={fileInputRef}
          type="file"
          onChange={(e) => setfileData(e.target.files[0])}
        />
        <Button
          isLoading={isSubmitting}
          isDisabled={isSubmitting}
          onClick={submitHandler}
          w={"100%"}
          mt={6}
        >
          Submit
        </Button>
 
        {returnedUrl && (
          <Box mt={6} textAlign="center" fontWeight={"bold"}>
            <Text>Here is the link to your image 👇</Text>
            <Flex  >
            <Link fontStyle={'italic'} color={"green"} isExternal href={returnedUrl}>
              {returnedUrl } 
            </Link>
            <CopyIcon onClick={copyLink} cursor={'pointer'}   ml={2}/>
            </Flex>
          </Box>
        )}
      </FormControl>
    </Container>
  );
}

export default SubmitImage;
