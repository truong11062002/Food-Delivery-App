import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg width={29} height={29} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M15.708 3.625A10.875 10.875 0 0 0 4.833 14.5H1.208l4.7 4.7.085.17 4.882-4.87H7.25a8.452 8.452 0 0 1 8.458-8.458 8.452 8.452 0 0 1 8.459 8.458 8.452 8.452 0 0 1-8.459 8.458A8.39 8.39 0 0 1 9.74 20.47l-1.716 1.716a10.82 10.82 0 0 0 7.685 3.19 10.875 10.875 0 0 0 0-21.75ZM14.5 9.667v6.041l5.136 3.045.93-1.558-4.253-2.526V9.667H14.5Z"
      fill={props.fill}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
