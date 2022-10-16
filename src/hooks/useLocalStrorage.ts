import { useState } from 'react';

export default function useLocalStorage<T>(key: string, initialValue: T) {
  // 값을 저장할 상태
  // 로직이 한 번만 실행되도록 초기 상태 함수를 useState에 전달합니다.
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // 로컬 저장소에서 키로 값 가져옵니다.
      const item = window.localStorage.getItem(key);
      // 저장된 json을 구문 분석하거나 아무것도 반환하지 않으면 initialValue를 반환합니다.
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // 오류가 발생하면 initialValue로 반환
      return initialValue;
    }
  });

  // useState의 setter 함수의 래핑된 버전을 반환합니다.
  // 새 값을 localStorage에 유지합니다.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // 값이 함수가 되도록 허용하여 useState와 동일한 API를 갖습니다.
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // 상태를 저장합니다.
      setStoredValue(valueToStore);
      // 로컬 저장소에 저장합니다.
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // 필요한 에러케이스를 추가합니다.
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
