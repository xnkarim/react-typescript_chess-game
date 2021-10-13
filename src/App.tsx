import React from 'react';
import Board from './components/Board';
import { useAppSelector, useAppDispatch } from './store/hooks';
import { selectFigures } from './store/Game/reducer';

function App() {
  const figures = useAppSelector(selectFigures);
  const dispatch = useAppDispatch();

  return (
    <div style={{ height: '100vh' }}>
      <Board figures={figures}/>
    </div>
  );
}

export default App;
