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

const ItemMoveButton = ({ selectedItems, setSelectedItems }) => {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);

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

  return (
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
  );
};
export default ItemMoveButton;

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
  cursor: pointer;
`;
