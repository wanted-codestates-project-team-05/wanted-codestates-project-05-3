import React from 'react';

// useState와 같은 역할
import { useRecoilState } from 'recoil';

import { 
	titleOnOffState,       // 타이틀 on/off 값 true OR false
	oneDragOnOffState,     // 하나씩 옮기기 on/off 값 true OR false
	searchOnOffState,      // 검색 on/off 값 true OR false
	itemNumOnOffState,     // 아이템 개수 on/off 값 true OR false
} from './onoffAtom';

import { 
	leftListState,           // 왼쪽 리스트  
	rightListState,          // 오른쪽 리스트
	componentHeightState,    // 설정 높이값
	componentWidthState,     // 설정 너비값
	itemSizeState,           // 아이템 사이즈 조절 
	leftTitleNameState,      // 왼쪽 타이틀 값
	rightTitleNameState,     // 오른쪽 타이틀 값
} from './objectAtom';

export const TestCase = () => {

	// recoil값을 사용하려면 useRecoilValue를 사용해서 useState와 같이 사용하면 됩니다.
	const [title, setTitle] = useRecoilState(titleOnOffState);
	const [oneDrag, setOneDrag] = useRecoilState(oneDragOnOffState);
	const [search, setSearch] = useRecoilState(searchOnOffState);
	const [itemNum, setItemNum] = useRecoilState(itemNumOnOffState);
	const [leftList, setLeftList] = useRecoilState(leftListState);
	const [rightList, setRightList] = useRecoilState(rightListState);
	const [componentHeight, setComponentHeight] = useRecoilState(componentHeightState);
	const [componentWidth, setComponentWidth] = useRecoilState(componentWidthState);
	const [itemSize, setItemSize] = useRecoilState(itemSizeState);
	const [leftTitleName, setLeftTitleName] = useRecoilState(leftTitleNameState);
	const [rightTitleName, setRightTitleName] = useRecoilState(rightTitleNameState);

	// 값 변경 핸들러 (이렇게만 변경하면 store값 변경됩니다.)
	const handleChangeOnOff = () => {
		setTitle(!title);
		setOneDrag(!oneDrag);
		setSearch(!search);
		setItemNum(!itemNum);
	}

	return (
		<div onClick={handleChangeOnOff}>
			타이틀 on / off : {title ? 'on' : 'off'} <br/>
			하나씩 옮기기 on / off : {oneDrag ? 'on' : 'off'} <br/>
			검색 on / off : {search ? 'on' : 'off'} <br/>
			아이템 개수 on / off : {itemNum ? 'on' : 'off'} <br/>

			리스트 : {leftList.map((item) => (
				<div key={item.id}>{item.emoji}</div>
			))}<br/>
			높이 : {componentHeight}px

		</div>
	)
}