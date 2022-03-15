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
import { useRecoilState } from 'recoil';
import { emojiMenus } from '../../assets/data';

const ItemMoveButton = ({ selectedLeft, setSelectedLeft, selectedRight, setSelectedRight }) => {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);

  const handleInitializationClick = () => {
    setLeftList(emojiMenus);
    setRightList([]);
  };
  const handleMoveSelected = () => {
    setRightList((list) => list.concat(selectedLeft));
    setLeftList((list) =>
      list.filter((option) => {
        let result = true;
        selectedLeft?.forEach((item) => {
          if (option.id === item.id) result = false;
        });
        return result;
      })
    );
    setSelectedLeft([]);
  };
  const handleMoveAvailable = () => {
    setLeftList((leftList) => leftList.concat(selectedRight));
    setRightList((rightList) =>
      rightList.filter((option) => {
        let result = true;
        selectedRight?.forEach((item) => {
          if (option.id === item.id) result = false;
        });
        return result;
      })
    );
    setSelectedRight([]);
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
