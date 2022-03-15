import React, { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { leftListState, leftTitleNameState, rightListState, rightTitleNameState } from '../atom/objectAtom';
import styled from 'styled-components';
import ItemMoveButton from '../components/ItemMoveButton/ItemMoveButton';
import ListContainer from '../components/ListContainer';
import Setting from '../components/Setting';
import useSetSessionStorage from '../hooks/useSetSessionStorage';

export default function Homepage() {
  const [leftList, setLeftList] = useSetSessionStorage(leftListState, 'leftList', true);
  const [rightList, setRightList] = useSetSessionStorage(rightListState, 'rightList', true);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);
  const leftTitleName = useRecoilValue(leftTitleNameState);
  const rightTitleName = useRecoilValue(rightTitleNameState);

  useEffect(() => {
    if (selectedLeft.length > 0) {
      setSelectedRight([]);
    }
  }, [selectedLeft, setSelectedRight]);

  useEffect(() => {
    if (selectedRight.length > 0) {
      setSelectedLeft([]);
    }
  }, [selectedRight, setSelectedLeft]);

  return (
    <Container>
      <Wrapper>
        <ListContainer 
          list={leftList} 
          selected={selectedLeft} 
          setSelected={setSelectedLeft} 
          title={leftTitleName} 
          setLeftList={setLeftList}
        />
        <ItemMoveButton
          selectedLeft={selectedLeft}
          setSelectedLeft={setSelectedLeft}
          selectedRight={selectedRight}
          setSelectedRight={setSelectedRight}
        />
        <ListContainer
          list={rightList}
          selected={selectedRight}
          setSelected={setSelectedRight}
          title={rightTitleName}
          setRightList={setRightList}
        />
      </Wrapper>
      <Setting />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;
