import axios from 'axios';

export async function getBoard(payload: {}) {
  let res = await axios.get('http://localhost:3000/board', {
    params: payload
  });
  return res;
}
