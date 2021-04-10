import axios from 'axios';

export async function getCounter(payload: {}) {
  let res = await axios.get('http://localhost:3000/counter', {
    params: payload
  });
  return res;
}

export async function increment(payload: {}) {
  let res = await axios.post('http://localhost:3000/counter/increment', payload);
  return res;
}

export async function decrement(payload: {}) {
  let res = await axios.post('http://localhost:3000/counter/decrement', payload);
  return res;
}