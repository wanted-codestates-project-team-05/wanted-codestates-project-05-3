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
import {
  leftListState, // 왼쪽 리스트
  rightListState, // 오른쪽 리스트
} from '../../atom/objectAtom';
import { useRecoilState } from 'recoil';
import { emojiMenus } from '../../assets/data';

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
    console.log(rightList, 'rightList1');
    setRightList((selectedOptions) => selectedOptions.concat(selectedItems));
    setLeftList((availableOptions) =>
      availableOptions.filter((option) => {
        let result = true;
        selectedItems.forEach((item) => {
          if (option.id === item.id) result = false;
        });
        return result;
      })
    );
  };

  return (
    <>
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
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faAngleDoubleRight} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faAngleLeft} onClick={() => handleMoveSelected(selectedItems)} />
        </Button>
        <Button>
          <FontAwesomeIcon icon={faAngleRight} />
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
