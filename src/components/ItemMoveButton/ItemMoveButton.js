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

const ItemMoveButton = () => {
  return (
    <Wrap>
      <Button>
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </Button>
      <Button>
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <Button>
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
