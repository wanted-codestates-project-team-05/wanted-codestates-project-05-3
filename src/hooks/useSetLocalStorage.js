import React from 'react';
import { useRecoilState } from 'recoil';

function useSetLocalStorage(state, storageName, list) {

	const [currentState, setCurrentState] = useRecoilState(state);

	const setStateWithLocalStorage = (value) => {
		setCurrentState(value);
		window.localStorage.setItem(storageName, list ? JSON.stringify(value) : value)
	}

	return [currentState, setStateWithLocalStorage]
}

export default useSetLocalStorage;