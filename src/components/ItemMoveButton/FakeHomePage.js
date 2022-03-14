import React, { useState } from 'react';
import ItemMoveButton from './ItemMoveButton';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { leftListState, rightListState } from '../../atom/objectAtom';
import { oneDragOnOffState } from '../../atom/onoffAtom';

const FakeHomePage = () => {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);
  const [oneDrag, setOneDrag] = useRecoilState(oneDragOnOffState);
  const handleSelected = (e, option) => {
    if (!oneDrag) {
      if (e.shiftKey) {
        const targetItems = e.target.parentElement.id;
        if (targetItems === 'left') {
          setSelectedItems(leftList);
        } else if (targetItems === 'right') {
          setSelectedItems(rightList);
        }
      } else {
        if (selectedItems.includes(option)) {
          setSelectedItems((selected) => selected.filter((item) => item.id !== option.id));
        } else {
          setSelectedItems((selected) => [...selected, option]);
        }
      }
    } else {
      setSelectedItems([option]);
    }
  };
  const [selectedItems, setSelectedItems] = useState([]);
  return (
    <FakeContainer>
      <ul id="left">
        {leftList.map((option) => (
          <Item key={option.id} selected={selectedItems.includes(option)} onClick={(e) => handleSelected(e, option)}>
            {option.name}
          </Item>
        ))}
      </ul>
      <ItemMoveButton selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      <ul id="right">
        {rightList.map((option) => (
          <Item key={option.id} selected={selectedItems.includes(option)} onClick={(e) => handleSelected(e, option)}>
            {option.name}
          </Item>
        ))}
      </ul>
    </FakeContainer>
  );
};

export default FakeHomePage;

const FakeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const Item = styled.li`
  background-color: ${({ selected }) => (selected ? 'lightGrey' : 'white')};
`;
