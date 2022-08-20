import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16 2v9h-5v5H2V2h14Zm0-2H2C.9 0 0 .9 0 2v14c0 1.1.9 2 2 2h10l6-6V2c0-1.1-.9-2-2-2ZM9 11H4V9h5v2Zm5-4H4V5h10v2Z"
      fill={props.fill}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
