import React from 'react';
import styled from 'styled-components';
import { leftListState, rightListState } from '../../atom/objectAtom';
import { useRecoilState } from 'recoil';

const CountSelectedItem = ({ selectedItemsLength, direction }) => {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);
  const allCount = direction === 'left' ? leftList.length : rightList.length;
  return (
    <Wrap>
      <Text>
        {selectedItemsLength}/{allCount}
      </Text>
    </Wrap>
  );
};

export default CountSelectedItem;

const Wrap = styled.div`
  width: 200px;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 3px;
  text-align: center;
  height: 20px;
  line-height: 20px;
`;

const Text = styled.p``;
