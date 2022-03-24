import { useRef } from 'react';
import useHover from '../hooks/useHover';
import randomColor from '../utils/randomColor';
import colors from '../constants/colors';

export default function Hover() {
  const ref = useRef(null);
  const isHovering = useHover(ref);

  return (
    <div className='square' ref={ref} style={{ background: isHovering ? randomColor(colors) : '#ececec'}}></div>
  );
}
