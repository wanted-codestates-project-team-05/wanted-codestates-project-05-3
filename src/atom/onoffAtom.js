import { atom } from 'recoil';

export const searchOnOffState = atom({
	key: 'searchOnOffState',
	default: window.localStorage.getItem('searchOnOff') === 'true' ? true : false || true,
});

export const titleOnOffState = atom({
	key: 'titleOnOffState',
	default: window.localStorage.getItem('titleOnOff') === 'true' ? true : false || false,
});

export const oneDragOnOffState = atom({
	key: 'oneDragOnOffState',
	default: window.localStorage.getItem('oneDragOnOff') === 'true' ? true : false || true,
});

export const itemNumOnOffState = atom({
	key: 'itemNumOnOffState',
	default: window.localStorage.getItem('itemNumOnOff') === 'true' ? true : false || true,
});
