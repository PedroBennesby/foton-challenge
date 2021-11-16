import React from 'react';
import { Text, AspectRatio } from '@chakra-ui/react';
import Iframe from 'react-iframe';

export default function ReviewsOfTheDayContainer() {
  return (
    <div>
      <Text mt="30" mb="15" color="#3F4043" fontSize="lg" fontWeight="600">
        Reviews of The Day
      </Text>
      <AspectRatio w="100%" ratio={16 / 9} borderRadius="5px">
        <Iframe
          url="https://www.youtube.com/watch?v=FYDdinYveKU"
          allowFullScreen
        ></Iframe>
      </AspectRatio>
    </div>
  );
}
