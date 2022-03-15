import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { leftListState, leftTitleNameState, rightListState, rightTitleNameState } from '../atom/objectAtom';
import ItemMoveButton from '../components/ItemMoveButton/ItemMoveButton';
import ListContainer from '../components/ListContainer';

export default function Homepage() {
  const [leftList, setLeftList] = useRecoilState(leftListState);
  const [rightList, setRightList] = useRecoilState(rightListState);
  const [selected, setSelected] = useState([]);
  const [leftTitleName, setLeftTitleName] = useRecoilState(leftTitleNameState);
  const [rightTitleName, setRightTitleName] = useRecoilState(rightTitleNameState);

  return (
    <div>
      <ListContainer
        list={leftList}
        setList={setLeftList}
        selected={selected}
        setSelected={setSelected}
        title={leftTitleName}
      />
      <ItemMoveButton selectedIteItems={selected} setSelectedItems={setSelected} />
      <ListContainer
        list={rightList}
        setList={setRightList}
        selected={selected}
        setSelected={setSelected}
        title={rightTitleName}
      />
    </div>
  );
}
