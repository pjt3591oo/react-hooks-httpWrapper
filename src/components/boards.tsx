import useBoards, { Board } from '../hooks/useBoards';
import {ToastsContainer, ToastsStore, ToastsContainerPosition} from 'react-toasts';

const Boards = (props: any) => {
  const { boards } = useBoards({
    success: (msg: string) => {
      ToastsStore.success(msg)
    },
    validate: (msg: string) => {
      ToastsStore.warning(msg);
    },
    error: (error: string) => {
      ToastsStore.error("Board Component error 발생 쉣더뻑");
    },
  });

  return (
    <div>
      <h1>Boards Components.</h1>
      <table>
        <thead>
          <th>NO.</th>
          <th>이름</th>
          <th>등록시간</th>
        </thead>
        <tbody>
          {boards.map((board: Board, boardIdx: number) => (
            <tr key={board.id}>
              <td>{board.id}</td>
              <td>{board.title}</td>
              <td>{board.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ToastsContainer store={ToastsStore} position={ToastsContainerPosition.BOTTOM_LEFT} lightBackground/>
    </div>
  );
};

export default Boards;
