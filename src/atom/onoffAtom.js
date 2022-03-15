import { atom } from 'recoil';

export const searchOnOffState = atom({
  key: 'searchOnOffState',
<<<<<<< HEAD
  default: window.localStorage.getItem('searchOnOff') || true,
=======
  default: window.localStorage.getItem('searchOnOff') || false,
>>>>>>> 96ec85c ([Client] / #18, #19 / edit: HomePage, ItemMoveButton (#20))
});

export const titleOnOffState = atom({
  key: 'titleOnOffState',
  default: window.localStorage.getItem('titleOnOff') || false,
});

export const oneDragOnOffState = atom({
  key: 'oneDragOnOffState',
<<<<<<< HEAD
  default: window.localStorage.getItem('oneDragOnOff') || true,
=======
	default: window.localStorage.getItem('oneDragOnOff') || true,
>>>>>>> 96ec85c ([Client] / #18, #19 / edit: HomePage, ItemMoveButton (#20))
});

export const itemNumOnOffState = atom({
  key: 'itemNumOnOffState',
<<<<<<< HEAD
  default: window.localStorage.getItem('itemNumOnOff') || true,
=======
	default: window.localStorage.getItem('itemNumOnOff') || true,
>>>>>>> 96ec85c ([Client] / #18, #19 / edit: HomePage, ItemMoveButton (#20))
});
