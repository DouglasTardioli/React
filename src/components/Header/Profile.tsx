import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return(
        <Flex align="center">
        <Box mr="4" textAlign="right">
          <Text>Douglas Tardioli</Text>
          <Text color="gray.300" fontSize="small">
            douglastardioli.4@gmail.com
          </Text>
        </Box>
        <Avatar
          size="md"
          name="Douglas Tardioli"
          src="https://github.com/douglastardioli.png"
        />
      </Flex>
    )
}