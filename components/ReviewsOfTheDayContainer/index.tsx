import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import Iframe from 'react-iframe';

export default function ReviewsOfTheDayContainer() {
  return (
    <div>
      <Text mt="30" mb="15" color="#3F4043" fontSize="lg" fontWeight="600">
        Reviews of The Day
      </Text>
      <Box
        w="100%"
        h="32vh"
        borderRadius="5px"
        border="1px solid transparent"
        overflow="hidden"
      >
        <Iframe
          url="https://www.youtube.com/embed/FYDdinYveKU"
          title="YouTube video player"
          allowFullScreen
          height="75%"
          width="100%"
        ></Iframe>
      </Box>
    </div>
  );
}
