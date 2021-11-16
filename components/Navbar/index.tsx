import { Flex, Text, Image } from '@chakra-ui/react';

export default function Navbar() {
  return (
    <>
      <Flex
        w="100%"
        position="fixed"
        bottom="0"
        background="white"
        padding="10px 55px"
        justify="space-between"
      >
        <Flex flexDir="column" h="100%" justify="center" align="center">
          <Image m="0 auto" src="/home.png" alt="" mb="10px"></Image>
          <Text fontSize="sm" color="black">
            Home
          </Text>
        </Flex>
        <Flex flexDir="column" h="100%" justify="center">
          <Image m="0 auto" src="/book.png" alt="" mb="10px"></Image>
          <Text fontSize="sm" color="#BFBEBF">
            Libraries
          </Text>
        </Flex>
        <Flex flexDir="column" h="100%" justify="center">
          <Image m="0 auto" src="/user.png" alt="" mb="10px"></Image>
          <Text fontSize="sm" color="#BFBEBF">
            Profile
          </Text>
        </Flex>
      </Flex>
    </>
  );
}
