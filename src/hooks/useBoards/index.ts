import { useEffect, useState } from 'react';
import useApiWrapper, { HttpRes, HttpResHandler } from '../useHttpWrapper';

import {
  getBoard
} from '../../apis/board';

export interface Board {
  id: number;
  title: string;
  createdAt: string;
}

export interface BoardRes {
  results: Board[]
}

function useBoards(httpResHandler: HttpResHandler): {boards: Board[]} {
  const [boards, setBoards] = useState<Board[]>([]);
  const { call } = useApiWrapper(httpResHandler);

  useEffect(() => {
    (async () => {
      const { data, isSuccess }: HttpRes<BoardRes> = await call<BoardRes>(getBoard, 'board hook: 초기화 완료');
      if (!isSuccess) return
      setBoards(data?.results || []);
    })();
  }, [])

  return {
    boards
  }
}

export default useBoards;