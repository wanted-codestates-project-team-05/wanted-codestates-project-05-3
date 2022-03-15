import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { componentHeightState, componentWidthState, itemSizeState } from '../atom/objectAtom';
import { itemNumOnOffState, oneDragOnOffState } from '../atom/onoffAtom';
import { DragToReorderList } from '../hooks/DragAndDrop';
import CountSelectedItem from './ItemMoveButton/CountSelectedItem';

export default function ListContainer({ list, setList, selected, setSelected, title }) {
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState([]);
  const [initialSelect, setInitialSelect] = useState();
  const size = useRecoilValue(itemSizeState);
  const width = useRecoilValue(componentWidthState);
  const height = useRecoilValue(componentHeightState);
  const multiSelect = useRecoilValue(oneDragOnOffState);
  const countView = useRecoilValue(itemNumOnOffState);

  const { onDragStart, onDragOver, onDragLeave, onDragEnter, onDragEnd, onDrop } = DragToReorderList({
    items,
    setItems,
  });

  const handleInput = ({ target: { value } }) => {
    setFilter(value);
  };

  // const handleSelected = (e, option) => {
  //   if (!multiSelect) {
  //     setSelected([item]);
  //     setInitialSelect(item);
  //     return;
  //   }
  //   if (e.shiftKey) {
  //     const index = list.findIndex((value) => value === initialSelect);
  //     const clickedIndex = list.findIndex((value) => value === option);
  //     if (index <= clickedIndex) setSelected(list.slice(index, clickedIndex + 1));
  //     if (index > clickedIndex) setSelected(list.slice(clickedIndex, index + 1));
  //     return;
  //   }
  //   if (e.nativeEvent.ctrlKey) {
  //     setSelected((prev) =>
  //       prev.includes(item) ? [...prev.filter((value) => value.id !== item.id)] : [...prev, item]
  //     );
  //     setInitialSelect(item);
  //     return;
  //   }
  //     else {
  //       if (selected.includes(option)) {
  //         setSelected((selected) => selected.filter((item) => item.id !== option.id));
  //       } else {
  //         setSelected((selected) => [...selected, option]);
  //       }
  //     }
  //   }
  //   setSelected([item]);
  //   setInitialSelect(item);
  // };

  const handleClick = (e, item) => {
    if (!multiSelect) {
      setSelected([item]);
      setInitialSelect(item);
      return;
    }
    if (e.nativeEvent.ctrlKey) {
      setSelected((prev) =>
        prev.includes(item) ? [...prev.filter((value) => value.id !== item.id)] : [...prev, item]
      );
      setInitialSelect(item);
      return;
    }
    if (e.nativeEvent.shiftKey) {
      const index = list.findIndex((value) => value === initialSelect);
      const clickedIndex = list.findIndex((value) => value === item);
      if (index <= clickedIndex) setSelected(list.slice(index, clickedIndex + 1));
      if (index > clickedIndex) setSelected(list.slice(clickedIndex, index + 1));
      return;
    }
    setSelected([item]);
    setInitialSelect(item);
  };

  // useEffect(() => {
  //   console.log(selected);
  // }, [selected]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  useEffect(() => {
    setSelected([]);
    setFiltered(list.filter((item) => item?.name.includes(filter)));
  }, [filter, list, setSelected]);

  return (
    <Container width={width}>
      <Input type="text" onChange={handleInput} placeholder={'search'} />
      <Wrapper>
        <TextBox>
          <p>{title}</p>
        </TextBox>
        <Ul height={height}>
          {filtered.map((item, index) => {
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
                onDragEnter={onDragEnter}
                onDragEnd={onDragEnd}
                onDrop={onDrop}
                className="draggable"
              >{`${item.emoji} ${item.name}`}</Li>
            );
          })}
        </Ul>
        {countView && <CountSelectedItem allCount={filtered.length} selectedItemsLength={selected.length} />}
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
  font-size: ${({ size }) => size}px;
  border-bottom: 1px solid lightgray;
  ${({ selected }) => (selected ? 'background-color: skyblue;' : '')}
  cursor: pointer;
  &:hover {
    background-color: skyblue;
  }
  &:last-child {
    border-bottom: none;
  }
  &.over {
    transform: scale(1.1, 1.1);
    background-color: #00a8ff;
  }
`;
