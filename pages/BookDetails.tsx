import React from 'react';
import { Flex, Text, Image, Box, Link } from '@chakra-ui/react';

export default function BookDetails() {
  return (
    <Flex
      background="#FFF6E5"
      h="100vh"
      w="100%"
      padding="55px 20px 0 20px"
      flexDir="column"
      align="center"
      overflow="hidden"
      position="relative"
    >
      <Link href="/" display="flex" w="100%" mr="auto" mb="15px">
        <Image src="/Back.png" alt=""></Image>
      </Link>

      <Image
        src="/Oval.png"
        alt=""
        position="absolute"
        top="-20px"
        right="-40px"
        transform="rotateZ(210deg)"
      ></Image>
      <Box position="relative">
        <Image
          src="http://books.google.com/books/content?id=NEm4DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          alt=""
          position="relative"
          zIndex="1"
        ></Image>
        <Image
          src="/Oval.png"
          alt=""
          position="absolute"
          transform="scale(0.3)"
          top="80px"
          right="-45px"
        ></Image>
        <Image
          src="/circle.png"
          alt=""
          position="absolute"
          top="0"
          right="-10px"
        ></Image>
        <Image
          src="/circle-full-blue.png"
          alt=""
          position="absolute"
          top="25px"
          left="-35px"
        ></Image>
        <Image
          src="/circle-full-pink.png"
          alt=""
          position="absolute"
          top="35px"
          left="-65px"
        ></Image>
      </Box>
      <Box>
        <Text fontSize="3xl" color="#36383A" mt="30px">
          Hooked : How to Build Habid-Forming Products
        </Text>
        <Text fontSize="xl" color="#FF6978" mb="10px">
          Nir Eyal
        </Text>
        <Text fontSize="xl" color="#31313199">
          How do successful companies create products people can’t put down? Why
          do some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?Why do
          some products capture widespread attention while others flop?
        </Text>
      </Box>
    </Flex>
  );
}
