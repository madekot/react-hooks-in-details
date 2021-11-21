import { useEffect, useState, useRef } from 'react';

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
  const refContainer = useRef();
  const toggledRef = useRef(false);
  const [toggledState, setToggleState] = useState(false);

  const focusInput = () => {
    refContainer.current?.focus();
  };

  const onChange = (event) => {
    const text = event.target.value;
    if (text === 'blur') {
      refContainer.current?.blur();
    }
  };

  const changeRef = () => {
    toggledRef.current = !toggledRef.current;
    console.log(`toggled to: ${toggledRef.current}`);
  };

  const changeState = () => {
    setToggleState((prev) => !prev);
  };

  console.log(
    `toggledRef: ${toggledRef.current}, toggledState: ${toggledState}`,
  );

  return (
    <div>
      <input ref={refContainer} onChange={onChange} />
      <p>
        <button onClick={focusInput}>FOCUS</button>
      </p>
      <p>
        <button onClick={changeRef}>TOGGLE REF</button>
        <button onClick={changeState}>TOGGLE STATE</button>
      </p>
    </div>
  );
}
