import { Box,Image } from "@chakra-ui/react";
import { IoMdClose } from "react-icons/io";
function LightBox({photo,lightBoxVisibility}){
    return <Box  w={'100vw'} h={'100vh'} position={'absolute'} inset={0} display={'grid'} placeItems={'center'} bgColor={`rgba(0,0,0,0.5)`} onClick={(e)=>{lightBoxVisibility(false)}}>
        <Image onClick={(e) => e.stopPropagation()} maxH={'100%'} src={photo}/>
        <Box cursor={'pointer'} display={'inline'} top={'30px'} right={'30px'} position={'absolute'}>
        <IoMdClose onClick={()=> lightBoxVisibility(false)}/>
        </Box>
    </Box>
}
export default LightBox;