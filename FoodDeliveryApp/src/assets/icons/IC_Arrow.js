import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={23}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M22.707 8.707a1 1 0 0 0 0-1.414L16.343.929a1 1 0 1 0-1.414 1.414L20.586 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM0 9h22V7H0v2Z"
      fill={props.fill}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
