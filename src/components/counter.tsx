import useCounter from '../hooks/useCounter';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';
 
const Counter = (props: any) => {
  let { value, incrementHandler, decrementHandler } = useCounter(0, {
    success: (msg: string) => {
      ToastsStore.success(msg)
    },
    validate: (msg: string) => {
      ToastsStore.warning(msg)
    },
    error: (error: String) => {
      ToastsStore.error("Counter Component error 발생 쉣더뻑");
    },
  });
  
  return (
    <div>
      <h1>Counter Components.</h1>
      <h2>{ value}</h2>
      <button onClick={incrementHandler}>+</button>
      <button onClick={decrementHandler}>-</button>

      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
    </div>
  );
};

export default Counter;
