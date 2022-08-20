import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m19.41 9.58-9-9C10.05.22 9.55 0 9 0H2C.9 0 0 .9 0 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42ZM11 18.01 2 9V2h7v-.01l9 9-7 7.02Z"
      fill={props.fill}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
