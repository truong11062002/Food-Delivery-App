import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg width={24} height={22} xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M20.84 3.61a5.5 5.5 0 0 0-7.78 0L12 4.67l-1.06-1.06a5.501 5.501 0 0 0-7.78 7.78l1.06 1.06L12 20.23l7.78-7.78 1.06-1.06a5.501 5.501 0 0 0 0-7.78v0Z"
      stroke={props.fill}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
