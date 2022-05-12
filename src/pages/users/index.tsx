import { Box, Flex } from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/SideBar";


export default function UserList() {
    return (
        <Box>
            <Header/>

            <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between'>

                    </Flex>

                </Box>
            </Flex>

        </Box>
    )
}