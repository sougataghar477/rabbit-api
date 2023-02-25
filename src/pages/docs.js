import { Container,Code,Text, Box,Center } from "@chakra-ui/react";

function Docs() {
    return ( <Container   lineHeight={1.6} maxW="60ch" py={16}>
        
        <Box mb={6}>

        <Text  fontSize={'2xl'}>Fetch random image from a breed</Text>
        <Code mb={1} >http://localhost:3000/api/breeds/[name]</Code>
        <Text mb={1} >Example:</Text>
        <Code mb={1} >http://localhost:3000/api/breeds/Rex</Code>
        </Box>
        <Box mb={6}>

        <Text    fontSize={'2xl'}>Fetch random image from the database</Text>
        <Text  mb={1}>Example:</Text>
        <Code  mb={1}>http://localhost:3000/api/random</Code>
        </Box>
        <Box mb={6}>

        <Text    fontSize={'2xl'}>Fetch  image from an id you got after submitting.</Text>
        <Code  mb={1}>http://localhost:3000/api/id/[urlId]</Code>
        <Text  mb={1}>Example:</Text>
        <Code  mb={1}>http://localhost:3000/api/id/c4fw4c</Code>
        </Box>
    </Container> );
}

export default Docs;