import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G
      opacity={0.3}
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round">
      <Path d="M9 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM20 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </G>
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
