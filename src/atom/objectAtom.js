import { emojiMenus } from '../assets/data';
import { atom } from 'recoil';

export const leftListState = atom({
	key: 'leftListState',
	default: window.localStorage.getItem('leftList') || emojiMenus,
});

export const rightListState = atom({
	key: 'rightListState',
	default: window.localStorage.getItem('rightList') || [],
});

export const leftTitleNameState = atom({
	key: 'leftTitleNameState',
	default: window.localStorage.getItem('leftTitleName') || 'available options',
});

export const rightTitleNameState = atom({
	key: 'rightTitleNameState',
	default: window.localStorage.getItem('rightTitleName') || 'selected options',
});

export const itemSizeState = atom({
	key: 'itemSizeState',
	default: window.localStorage.getItem('itemSize') || 16,
});

export const componentWidthState = atom({
	key: 'componentWidthState',
	default: window.localStorage.getItem('componentWidth') || 200,
});

export const componentHeightState = atom({
	key: 'componentHeightState',
	default: window.localStorage.getItem('componentHeight') || 300,
});