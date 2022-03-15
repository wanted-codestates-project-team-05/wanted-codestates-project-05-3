import { atom } from 'recoil';

export const searchOnOffState = atom({
	key: 'searchOnOffState',
	default: window.sessionStorage.getItem('searchOnOff') === 'false' ? false : true || true,
});

export const titleOnOffState = atom({
	key: 'titleOnOffState',
	default: window.sessionStorage.getItem('titleOnOff') === 'true' ? true : false || false,
});

export const oneDragOnOffState = atom({
	key: 'oneDragOnOffState',
	default: window.sessionStorage.getItem('oneDragOnOff') === 'false' ? false : true || true,
});

export const itemNumOnOffState = atom({
	key: 'itemNumOnOffState',
	default: window.sessionStorage.getItem('itemNumOnOff') === 'false' ? false : true || true,
});
