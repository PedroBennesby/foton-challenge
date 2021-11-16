import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';

export default function NewBooksContainer() {
  return (
    <div>
      <Text mt="30" mb="15" color="#3F4043" fontSize="lg" fontWeight="600">
        Discover new books
      </Text>
      <Flex w="100%">
        <Box
          bg="#00173D"
          width="85%"
          height="100%"
          borderRadius="5px"
          dropShadow="2px 4px 48px rgba(154, 175, 209, 0.62134);"
          padding="15px 20px"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          position="relative"
        >
          <Box display="flex" flexDir="column" zIndex="1" w="100%">
            <Text fontSize="4xl">Title</Text>
            <Text fontSize="1xl">Description</Text>
            <Flex direction="row" marginTop="auto" w="100%">
              <Image src="/Graph.png" alt="" objectFit="cover" height="100%" />
              <Text fontWeight="600" fontSize="sm" ml="4px">
                120+
              </Text>
              <Text fontSize="sm" ml="2">
                Read Now
              </Text>
            </Flex>
          </Box>
          <Flex w="100%" h="100%" justify="flex-end">
            <Image
              position="relative"
              boxSize="70%"
              alt="Capa do livro"
              borderRadius="5px"
              src="http://books.google.com/books/content?id=NEm4DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            />
            <Image
              src="/Oval.png"
              alt=""
              position="absolute"
              left="0"
              bottom="0"
            />
            <Image
              src="/Circle.png"
              alt=""
              position="absolute"
              top="15px"
              right="125px"
            />
            <Image
              src="/Triangle.png"
              alt=""
              position="absolute"
              top="5px"
              right="80px"
            />
            <Image
              src="/Rectangle.png"
              alt=""
              position="absolute"
              bottom="35px"
              right="90px"
            />
          </Flex>
        </Box>
      </Flex>
    </div>
  );
}
