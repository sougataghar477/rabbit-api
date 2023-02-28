import { CopyIcon } from "@chakra-ui/icons";
import { Container,Code,Text, Box,Center,useToast } from "@chakra-ui/react";
function Docs() {
    const toast=useToast();
    const copyCode=(e)=>{
        
        navigator.clipboard.writeText(e.target.textContent);
        toast({
            title: 'Code copied.',
            // description: "We've created your account for you.",
            status: 'success',
            duration: 4000,
            // isClosable: true,
             
          })
    }
    return ( <Container   lineHeight={1.6} maxW="60ch" py={[16, 16, 16]}>
        
        <Box  mb={6}>
        <Text mb={2} fontSize={'3xl'} fontStyle='italic'><u>Documentation</u></Text>
        <Text fontStyle={'italic'}>Click on any code to copy it</Text>
        <Text  fontSize={'2xl'}>Fetch random image from a breed</Text>
        <Code cursor={'pointer'} onClick={copyCode} my={2} >https://rabbit-api-pi.vercel.app/api/breeds/[name]  </Code> 
        <Text   >Example:</Text>
        <Code cursor={'pointer'} onClick={copyCode} my={2} >https://rabbit-api-pi.vercel.app/api/breeds/Rex</Code>
        </Box>
        <Box mb={6}>

        <Text    fontSize={'2xl'}>Fetch random image from the database</Text>
        <Text   >Example:</Text>
        <Code cursor={'pointer'} onClick={copyCode} my={2}>https://rabbit-api-pi.vercel.app/api/random</Code> 
        </Box>
        <Box mb={6}>

        <Text    fontSize={'2xl'}>Fetch  image from an id you got after submitting.</Text>
        <Code cursor={'pointer'} onClick={copyCode}  my={2}>https://rabbit-api-pi.vercel.app/api/id/[urlId]</Code> 
        <Text  >Example:</Text>
        <Code cursor={'pointer'} onClick={copyCode} my={2}>https://rabbit-api-pi.vercel.app/api/id/c4fw4c</Code> 
        </Box>
    </Container> );
}

export default Docs;