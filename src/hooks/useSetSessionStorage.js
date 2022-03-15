import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';

function useSetSessionStorage(state, storageName, list) {

	const [currentState, setCurrentState] = useRecoilState(state);

	const setStateWithSessionStorage = (value, type) => {
		if(type === 'list'){
			setCurrentState(list => list.concat(value));
		} else if(type === 'filter'){
			setCurrentState(list => list.filter((option) => {
        let result = true;
        value?.forEach((item) => {
          if (option.id === item.id) result = false;
        });
        return result;
      }))
		} else {
			setCurrentState(value)
		}
	}

	useEffect(() => {
		window.sessionStorage.setItem(storageName, list ? JSON.stringify(currentState) : currentState)
	}, [currentState])

	return [currentState, setStateWithSessionStorage]
}

export default useSetSessionStorage;