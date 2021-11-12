import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBox() {
  const [keyword, setKeyword] = useState('');

  const handleClick = () => {
    console.log(keyword);
  };

  return (
    <>
      <form>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            bg="#FDFCFC"
            color="#54565A"
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search book"
            _placeholder={{ color: '#54565A' }}
          />
        </InputGroup>
        <Button onClick={handleClick}></Button>
      </form>
    </>
  );
}
