import { useState } from 'react';

function useClick() {
  const [screen, setScreen] = useState({
    x: 0,
    y: 0,
  });

  const clickCoordinate = (e) => {
    setScreen({ x: e.screenX, y: e.screenY });
  };

  return {
    clickCoordinate,
    screen,
  };
}

export default useClick;
