import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { leftListState, leftTitleNameState, rightListState, rightTitleNameState } from '../atom/objectAtom';
import styled from 'styled-components';
import ItemMoveButton from '../components/ItemMoveButton/ItemMoveButton';
import ListContainer from '../components/ListContainer';

export default function Homepage() {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);
  const leftTitleName = useRecoilValue(leftTitleNameState);
  const rightTitleName = useRecoilValue(rightTitleNameState);

  return (
    <Container>
      <Wrapper>
        <ListContainer
          list={leftList}
          setList={setLeftList}
        selected={selectedLeft}
        setSelected={setSelectedLeft}
          title={leftTitleName}
      />
      <ItemMoveButton
        selectedLeft={selectedLeft}
        setSelectedLeft={setSelectedLeft}
        selectedRight={selectedRight}
        setSelectedRight={setSelectedRight}
      />
      <ListContainer
        list={rightList}
        setList={setRightList}
        selected={selectedRight}
        setSelected={setSelectedRight}
        title={rightTitleName}
          direction={'right'}
        />
      </Wrapper>
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
`;
