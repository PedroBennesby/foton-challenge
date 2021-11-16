import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBox() {
  const [keyword, setKeyword] = useState('');

  const handleClick = () => {
    console.log(keyword);
    fetchData(keyword);
  };

  const fetchData = async (keyword: string) => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${keyword}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  };

  return (
    <>
      <form>
        <InputGroup>
          <InputLeftElement
            pointerEvents="visible"
            children={<SearchIcon color="gray.300" />}
            onClick={handleClick}
            cursor="pointer"
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
      </form>
    </>
  );
}
