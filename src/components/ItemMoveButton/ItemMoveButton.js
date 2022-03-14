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
import CountSelectedItem from './CountSelectedItem';

const ItemMoveButton = () => {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);

  const [selectedItems, setSelectedItems] = useState([
    {
      id: 46,
      topId: 4,
      code: 'NORMALIZER',
      name: '정규화 파서',
      nameEn: 'Normalizer',
      nameKo: '정규화 파서',
      route: '/normalizer',
      ordinal: 3,
      visible: true,
      emoji: '🚌',
    },
    {
      id: 9,
      topId: 4,
      code: 'SCHEMA',
      name: '정규화',
      nameEn: 'Schema',
      nameKo: '정규화',
      route: '/schema',
      ordinal: 4,
      visible: true,
      emoji: '🚗',
    },
    {
      id: 10,
      topId: 4,
      code: 'CONNECTOR_MODEL',
      name: '수집 모델',
      nameEn: 'Connector Model',
      nameKo: '수집 모델',
      route: '/connector-model',
      ordinal: 5,
      visible: true,
      emoji: '🚠',
    },
  ]);
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
    <>
      <CountSelectedItem selectedItemsLength={selectedItems.length} direction="left" />
      {rightList.map((option) => (
        <p key={option.id}>{option.name}</p>
      ))}
      {console.log(rightList, 'rightList2')}
      {console.log(leftList, 'leftList2')}
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
    </>
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
`;
