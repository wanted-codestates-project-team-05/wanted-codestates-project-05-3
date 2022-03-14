import { atom } from 'recoil';

export const searchOnOffState = atom({
	key: 'searchOnOffState',
	default: window.localStorage.getItem('searchOnOff') || false,
});

export const titleOnOffState = atom({
	key: 'titleOnOffState',
	default: window.localStorage.getItem('titleOnOff') || false,
});

export const oneDragOnOffState = atom({
	key: 'oneDragOnOffState',
	default: window.localStorage.getItem('oneDragOnOff') || false,
});

export const itemNumOnOffState = atom({
	key: 'itemNumOnOffState',
	default: window.localStorage.getItem('itemNumOnOff') || false,
});
