import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { emojiMenus } from '../assets/data';

export default function ListContainer({ title = 'available', width, height, fontSize = 'M' }) {
  const [filtered, setFiltered] = useState(emojiMenus);
  const [filter, setFilter] = useState('');
  const [size, setSize] = useState();

  const handleInput = ({ target: { value } }) => {
    setFilter(value);
  };

  useEffect(() => {
    switch (fontSize) {
      case 'XS':
        setSize(0.6);
        break;
      case 'S':
        setSize(0.8);
        break;
      default:
        setSize(1);
    }
  }, [fontSize]);

  useEffect(() => {
    setFiltered(emojiMenus.filter((item) => item.name.includes(filter)));
  }, [filter]);

  return (
    <Container width={width} height={height}>
      <Input type="text" onChange={handleInput} placeholder={'search'} />
      <Wrapper>
        <TextBox>
          <p>{title}</p>
        </TextBox>
        <Ul>
          {filtered.map((item) => {
            return <Li key={item.id} size={size}>{`${item.emoji} ${item.name}`}</Li>;
          })}
        </Ul>
        <CountBox>
          <p>
            {0}/{filtered.length}
          </p>
        </CountBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: ${({ width }) => (width ? width : 200)}px;
  heigth: ${({ height }) => (height ? height : 300)}px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  outline: none;
  border: 1px solid lightgray;
  border-radius: 5px;
  height: 10px;
  padding: 10px;
`;

const Wrapper = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: bold;
  padding: 10px 0 10px 10px;
  border-bottom: 1px solid lightgray;
`;

const Ul = styled.ul`
  list-style: none;
  overflow-y: scroll;
  height: 500px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  padding: 10px 0 10px 15px;
  font-size: ${({ size }) => size * 16}px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
  &:hover {
    background-color: skyblue;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const CountBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  padding: 5px 0px;
  border-top: 1px solid lightgray;
`;
