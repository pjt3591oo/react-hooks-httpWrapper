import { useEffect, useState } from 'react';
import useApiWrapper, {HttpRes, HttpResHandler} from '../useHttpWrapper';
import {
  getCounter, increment, decrement
} from '../../apis/counter';

export interface CounterRes {
  value: number 
}

function useCounter(initVal: number, httpResHandler: HttpResHandler): {value: number, incrementHandler: any, decrementHandler: any} {
  const [value, setValue] = useState<number>(initVal || 0);
  const { call } = useApiWrapper(httpResHandler);

  useEffect(() => {
    
    (async () => {
      const { data, isSuccess }: HttpRes<CounterRes> = await call<CounterRes>(getCounter, 'counter hook: 초기화 완료');
      if (!isSuccess) return;
      setValue(data?.value || 0);
    })();

  }, []);

  const incrementHandler = async () => {
    const { data, isSuccess }: HttpRes<CounterRes> = await call<CounterRes>(increment, 'counter hook: 증가완료');
    if (!isSuccess) return;
    setValue(data?.value || 0);
  }
  
  const decrementHandler = async () => {
    const { data, isSuccess }: HttpRes<CounterRes> = await call<CounterRes>(decrement, 'counter hook: 감소완료', {}, () => {
      return 'counter hook: decrementHandler => 입력된 데이터 x가 잘못 되었습니다.'
    });
    if (!isSuccess) return;
    setValue(data?.value || 0);
  }

  return {
    value,
    incrementHandler,
    decrementHandler
  }
  
}

export default useCounter;
