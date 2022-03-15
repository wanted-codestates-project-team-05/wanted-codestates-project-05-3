import { emojiMenus } from '../assets/data';
import { atom } from 'recoil';

export const leftListState = atom({
	key: 'leftListState',
	default: JSON.parse(window.sessionStorage.getItem('leftList')) || emojiMenus,
});

export const rightListState = atom({
	key: 'rightListState',
	default: JSON.parse(window.sessionStorage.getItem('rightList')) || [],
});

export const leftTitleNameState = atom({
	key: 'leftTitleNameState',
	default: window.sessionStorage.getItem('leftTitleName') || 'available options',
});

export const rightTitleNameState = atom({
	key: 'rightTitleNameState',
	default: window.sessionStorage.getItem('rightTitleName') || 'selected options',
});

export const itemSizeState = atom({
	key: 'itemSizeState',
	default: parseInt(window.sessionStorage.getItem('itemSize')) || 16,
});

export const componentWidthState = atom({
	key: 'componentWidthState',
	default: parseInt(window.sessionStorage.getItem('componentWidth')) || 200,
});

export const componentHeightState = atom({
	key: 'componentHeightState',
	default: parseInt(window.sessionStorage.getItem('componentHeight')) || 300,
});