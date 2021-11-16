import React from 'react';
import { Box, Text, Flex, Image } from '@chakra-ui/react';

export default function CurrentlyReadingContainer() {
  return (
    <div>
      <Text mt="30" mb="15" color="#3F4043" fontSize="lg" fontWeight="600">
        Currently Reading
      </Text>
      <Flex w="100%" overflow="hidden">
        <Box
          bg="#EEF5DB"
          width="100%"
          height="100%"
          borderRadius="5px"
          dropShadow="2px 4px 48px rgba(154, 175, 209, 0.62134);"
          padding="15px 20px"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          position="relative"
        >
          <Image
            position="relative"
            boxSize="30%"
            alt="Capa do livro"
            borderRadius="5px"
            mr="8px"
            src="http://books.google.com/books/content?id=NEm4DgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          />
          <Box display="flex" flexDir="column" zIndex="1" w="100%">
            <Text fontSize="4xl" color="#2A2B26" fontWeight="600">
              Originals
            </Text>
            <Text fontSize="1xl" color="#74776D">
              by Adam Grant
            </Text>
            <Flex direction="row" marginTop="auto" w="100%">
              <Image
                src="/Chapter-icon.png"
                alt=""
                objectFit="cover"
                height="100%"
              />
              <Text fontWeight="600" fontSize="sm" ml="4px" color="#484944">
                Chapter
              </Text>
              <Text fontWeight="600" fontSize="sm" ml="4px" color="#FF6978">
                2
              </Text>
              <Text fontSize="sm" ml="1" color="#484944">
                From 9
              </Text>
            </Flex>
          </Box>

          <Image
            src="/Oval.png"
            alt=""
            position="absolute"
            right="-50px"
            top="-50px"
            transform="rotateZ(165deg)"
          />
          <Image
            src="/Circle.png"
            alt=""
            position="absolute"
            top="-7px"
            right="140px"
          />
          <Image
            src="/Rectangle.png"
            alt=""
            position="absolute"
            bottom="35px"
            right="-20px"
          />
        </Box>
      </Flex>
    </div>
  );
}
