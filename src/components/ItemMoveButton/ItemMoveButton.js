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
import { emojiMenus } from '../../assets/data';

const ItemMoveButton = () => {
  //recoil 로 변경할 부분
  const [availableOptions, setAvailableOptions] = useState(emojiMenus);
  const [selectedOptions, setSelectedOptions] = useState([
    {
      id: 6,
      topId: 3,
      code: 'DASHBOARD',
      name: '대시보드',
      nameEn: 'Dashboard',
      nameKo: '대시보드',
      route: '/dashboard',
      ordinal: 1,
      visible: true,
      emoji: '🥁',
    },
  ]);
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
    console.log(selectedOptions, 'initialization1');
    setSelectedOptions([]);
  };
  const handleMoveSelected = (selectedItems) => {
    console.log(selectedItems, 'handleMoveAvailable1');
    setSelectedOptions((selectedOptions) => selectedOptions.concat(selectedItems));
    setAvailableOptions((availableOptions) =>
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
      {selectedOptions.map((option) => (
        <p key={option.id}>{option.name}</p>
      ))}
      {console.log(selectedOptions, 'selectedOptions2')}
      {console.log(availableOptions, 'availableOptions2')}
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
