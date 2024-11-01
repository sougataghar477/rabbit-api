 
import {  useState } from "react";
import {
    Container,
    Box,
    Flex,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    Grid,
    Image, 
} from "@chakra-ui/react";
import Link from "next/link";
import LightBox from "@/components/LightBox";
import RandomPanel from '../components/RandomPanel';
import BreedsPanel from '../components/BreedsPanel';
function Home() {
    const [lightBox,lightBoxVisibility]=useState(false);
    const [photo, setPhoto] = useState("https://images.pexels.com/photos/4001296/pexels-photo-4001296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    const changePhoto=(url)=>{
         setPhoto(url);
    }
    return (
      
        
        <Container maxW={"960px"} py={16}>
            <Flex justifyContent="center" alignItems={'center'} gap={['16px','32px','64px','96px']} flexDirection={['column','column','row']}>
                {/* Left Side starts below */}
                <Box width={['auto',450,320]} flexGrow={[0,0,1]}>
                    {/* Heading start */}
                    <Text  fontSize={["3xl","3xl","4xl"]} lineHeight={1.2}>
                        An API that would serve you lots of cute pet rabbits
                    </Text>
                     {/* Heading ends */}
                    <Box my={[4,4,8]}>
                        <Text fontStyle={'italic'}  fontSize={"xl"} lineHeight={["2xl","2xl","4xl"]}>
                            Read <Link href="/docs"><u>our docs</u></Link> to see how to
                            use our API.
                        </Text>
                        <Text fontStyle={'italic'}  fontSize={"xl"} lineHeight="4xl">
                            You can submit photo(s) of your cute pet Rabbit here
                            too by clicking{" "}
                            <Link href="/submit-image">
                                <u>here</u>
                            </Link>
                            .
                        </Text>
                    </Box>
                    <Tabs mx={['auto','auto',0]} size={"sm"} variant="enclosed-colored" maxW={"360px"}>
                        <TabList>
                            <Tab >Random</Tab>
                            <Tab>By breed</Tab>
                        </TabList>

                        <TabPanels>
                            <RandomPanel changePhoto={changePhoto} />
                            <BreedsPanel changePhoto={changePhoto}/>
                        </TabPanels>
                    </Tabs>
                </Box>
                {/* Left Side ends above */}
                {/* Right Side starts below */}
                <Grid maxW={['100%',400,360,400]} placeItems={'center'} py={[5,0,0]}  >
                    <Image onClick={()=> lightBoxVisibility(true)} maxHeight={500}  borderRadius='lg' src={photo} />
                </Grid>
            </Flex>
            {lightBox && <LightBox lightBoxVisibility={lightBoxVisibility} photo={photo}/>}
        </Container>
 
    );
}
export default Home;
