import React from 'react';
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
import { emojiMenus } from '../../assets/data';
import useSetSessionStorage from '../../hooks/useSetSessionStorage';

const ItemMoveButton = ({ selectedLeft, setSelectedLeft, selectedRight, setSelectedRight }) => {
  const [leftListTest, setLeftListTest] = useSetSessionStorage(leftListState, 'leftList', true);
  const [rightListTest, setRightListTest] = useSetSessionStorage(rightListState, 'rightList', true);

  const handleInitializationClick = () => {
    setLeftListTest(emojiMenus);
    setRightListTest([]);
  };
  const handleMoveSelected = () => {
    setRightListTest(selectedLeft, 'list');
    setLeftListTest(selectedLeft, 'filter');
    setSelectedLeft([]);
  };
  const handleMoveAvailable = () => {
    setLeftListTest(selectedRight, 'list');
    setRightListTest(selectedRight, 'filter');
    setSelectedRight([]);
  };
  const handleMoveAll = (direction) => {
    if (direction === 'right') {
      setRightListTest(leftListTest, 'list');
      setLeftListTest([]);
    } else if (direction === 'left') {
      setLeftListTest(rightListTest, 'list');
      setRightListTest([]);
    }
  };

  return (
    <Wrap>
      <Button onClick={handleInitializationClick}>
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </Button>
      <Button onClick={() => handleMoveAll('right')}>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </Button>
      <Button onClick={() => handleMoveAll('left')}>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </Button>
      <Button onClick={handleMoveSelected}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <Button onClick={handleMoveAvailable}>
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </Wrap>
  );
};
export default ItemMoveButton;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  border-collapse: collapse;
  width: 30px;
`;
const Button = styled.button`
  margin-top: -1px;
  transform: scaleX(-1);
  background: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  cursor: pointer;
  height: 30px;
`;
