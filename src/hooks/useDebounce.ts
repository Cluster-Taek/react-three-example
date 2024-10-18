import { useCallback, useEffect } from 'react';

const useDeboucedEffect = <T>(func: () => void, delay: number, deps: T) => {
  const callback = useCallback(func, [func, deps]);

  useEffect(() => {
    const timer = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [callback, delay]);
};

export default useDeboucedEffect;
