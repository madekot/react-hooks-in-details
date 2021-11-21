import { useEffect, useState, useRef, useCallback } from 'react';
import { useCounter } from './Chapter-3'

function useUpdateEffect(callback) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      callback();
    }
  }, [callback])
}

export function Example() {
 const [value, increment] = useCounter();

 useEffect(() => {
   console.log('mounted');
 }, []);

 console.log(`render, value ${value}`);

 const callback = useCallback(() => {
   console.log(` value update: ${value}`);
 }, [value]);

 useUpdateEffect(callback);
 
 return <button onClick={increment}>REREBDER</button>
}
