import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faArrowRotateRight,
} from '@fortawesome/free-solid-svg-icons';
import { leftListState, rightListState } from '../../atom/objectAtom';
import { useRecoilState } from 'recoil';
import { emojiMenus } from '../../assets/data';

const ItemMoveButton = () => {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);

  const [selectedItems, setSelectedItems] = useState([]);
  const handleInitializationClick = () => {
    setLeftList(emojiMenus);
    setRightList([]);
  };
  const handleMoveSelected = (selectedItems) => {
    setRightList((list) => list.concat(selectedItems));
    setLeftList((list) =>
      list.filter((option) => {
        let result = true;
        selectedItems.forEach((item) => {
          if (option.id === item.id) result = false;
        });
        return result;
      })
    );
    setSelectedItems([]);
  };
  const handleMoveAvailable = (selectedItems) => {
    setLeftList((leftList) => leftList.concat(selectedItems));
    setRightList((rightList) =>
      rightList.filter((option) => {
        let result = true;
        selectedItems.forEach((item) => {
          if (option.id === item.id) result = false;
        });
        return result;
      })
    );
    setSelectedItems([]);
  };
  const handleMoveAll = (direction) => {
    if (direction === 'right') {
      setRightList((rightList) => rightList.concat(leftList));
      setLeftList([]);
    } else if (direction === 'left') {
      setLeftList((leftList) => leftList.concat(rightList));
      setRightList([]);
    }
  };
  const handleSelected = (e, option) => {
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
  };

  return (
    <FakeContainer>
      <ul id="left">
        {leftList.map((option) => (
          <Item key={option.id} selected={selectedItems.includes(option)} onClick={(e) => handleSelected(e, option)}>
            {option.name}
          </Item>
        ))}
      </ul>
      <Wrap>
        <Button>
          <FontAwesomeIcon icon={faArrowRotateRight} onClick={handleInitializationClick} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={() => handleMoveAll('right')} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faAngleDoubleRight} onClick={() => handleMoveAll('left')} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faAngleLeft} onClick={() => handleMoveSelected(selectedItems)} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faAngleRight} onClick={() => handleMoveAvailable(selectedItems)} />
        </Button>
      </Wrap>
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
export default ItemMoveButton;

const FakeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
`;
const Button = styled.button`
  margin-top: -1px;
  transform: scaleX(-1);
  background: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  width: 30px;
  height: 30px;
`;
const Item = styled.li`
  background-color: ${({ selected }) => (selected ? 'lightGrey' : 'white')};
`;
