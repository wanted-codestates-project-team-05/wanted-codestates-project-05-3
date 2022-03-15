import React, { useEffect, useState } from 'react';
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
        <ListContainer list={leftList} selected={selected} setSelected={setSelected} title={leftTitleName} />
        <ItemMoveButton selectedItems={selected} setSelectedItems={setSelected} />
        <ListContainer list={rightList} selected={selected} setSelected={setSelected} title={rightTitleName} />
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
