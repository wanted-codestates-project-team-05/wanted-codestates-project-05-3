import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { emojiMenus } from '../assets/data';
import { DragToReorderList } from '../hooks/DragAndDrop';

export default function ListContainer({ title = 'available', width, height, fontSize = 'M' }) {
  const [items, setItems] = useState(emojiMenus);
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState([]);
  const [size, setSize] = useState();
  const { onDragStart, onDragOver, onDragLeave, onDrop } = DragToReorderList({
    items,
    setItems,
  });
  const handleInput = ({ target: { value } }) => {
    setFilter(value);
  };

  const handleClick = (e, item) => {
    if (e.nativeEvent.ctrlKey) {
      setSelected((prev) =>
        prev.includes(item) ? [...prev.filter((value) => value.id !== item.id)] : [...prev, item]
      );
    } else if (e.nativeEvent.shiftKey) {
      const index = items.findIndex((value) => value === selected[selected.length - 1]);
      const clickedIndex = items.findIndex((value) => value === item);
      if (index <= clickedIndex) setSelected(items.slice(index, clickedIndex + 1));
      if (index > clickedIndex) setSelected(items.slice(clickedIndex, index + 1));
    } else {
      setSelected([item]);
    }
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
    setSelected([]);
    setItems(emojiMenus.filter((item) => item.name.includes(filter)));
  }, [filter]);

  return (
    <Container width={width}>
      <Input type="text" onChange={handleInput} placeholder={'search'} />
      <Wrapper>
        <TextBox>
          <p>{title}</p>
        </TextBox>
        <Ul height={height}>
          {items.map((item, index) => {
            return (
              <Li
                key={item.id}
                size={size}
                selected={selected.includes(item)}
                data-position={index}
                draggable={true}
                onClick={(e) => handleClick(e, item)}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
              >{`${item.emoji} ${item.name}`}</Li>
            );
          })}
        </Ul>
        <CountBox>
          <p>
            {selected.length}/{items.length}
          </p>
        </CountBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: ${({ width }) => (width ? width : 200)}px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
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
  height: 100%;
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
  height: ${({ height }) => (height ? height : 300)}px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Li = styled.li`
  padding: 10px 0 10px 15px;
  font-size: ${({ size }) => size * 16}px;
  border-bottom: 1px solid lightgray;
  ${({ selected }) => (selected ? 'background-color: skyblue;' : '')}
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
