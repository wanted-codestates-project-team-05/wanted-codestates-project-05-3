import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { leftListState, leftTitleNameState, rightListState, rightTitleNameState } from '../atom/objectAtom';
import styled from 'styled-components';
import ItemMoveButton from '../components/ItemMoveButton/ItemMoveButton';
import ListContainer from '../components/ListContainer';

export default function Homepage() {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);
  const [selected, setSelected] = useState([]);
  const [leftTitleName, setLeftTitleName] = useRecoilState(leftTitleNameState);
  const [rightTitleName, setRightTitleName] = useRecoilState(rightTitleNameState);

  return (
    <Container>
      <Wrapper>
        <ListContainer
          list={leftList}
          setList={setLeftList}
          selected={selected}
          setSelected={setSelected}
          title={leftTitleName}
          direction={'left'}
        />
        <ItemMoveButton selectedItems={selected} setSelectedItems={setSelected} />
        <ListContainer
          list={rightList}
          setList={setRightList}
          selected={selected}
          setSelected={setSelected}
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
