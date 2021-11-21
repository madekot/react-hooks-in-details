import { useEffect } from 'react';
import { useCounter } from './Chapter-3';

// function updateClicksCount(clicksCount) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         success: true,
//         clicksCount,
//       });
//     }, 1000);
//   });
// }

export function Counter() {
  const [count, increment] = useCounter(0, 1);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  // useEffect(() => {
  //   const update = async () => {
  //     const response = await updateClicksCount(count);
  //     console.log(response);
  //   };
  //   update();
  // }, [count]);

  useEffect(() => {
    console.log(`>> running effect ${count}`)

    return () => {
      // cleanup function
      console.log(`<< cleaning up ${count}`)
    }
  }, [count])

  useEffect(() => {
    console.log('componet did mount');

    return () => {
      console.log('component will unmount')
    }
  })

  useEffect(() => {
    console.log('executed AFTER each render')
  })

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
