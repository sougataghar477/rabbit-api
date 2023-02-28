import { Flex,Link } from "@chakra-ui/react";
import {} from '@chakra-ui/icons';
function Footer(){
    return <Flex display={['none','none','flex']} pos={'fixed'} right={6} bottom={1} columnGap={5} p={5} pr={10} justifyContent={['center','center','flex-end']}>
        <Link  fontSize={18} fontStyle={'italic'}  ><u>Donate</u></Link>
        <Link fontSize={18} fontStyle={'italic'}><u> Made by Sougata Ghar </u></Link>
    </Flex>
}
export default Footer;