import React from 'react';
import { Text, AspectRatio } from '@chakra-ui/react';

export default function ReviewsOfTheDayContainer() {
  return (
    <div>
      <Text mt="30" mb="15" color="#3F4043" fontSize="lg" fontWeight="600">
        Reviews of The Day
      </Text>
      <AspectRatio w="100%" ratio={16 / 9} borderRadius="5px">
        <iframe
          src="https://www.youtube.com/watch?v=FYDdinYveKU"
          allowFullScreen
        ></iframe>
      </AspectRatio>
    </div>
  );
}
