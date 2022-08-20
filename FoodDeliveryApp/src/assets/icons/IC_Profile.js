import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 0C4.925 0 0 4.925 0 11s4.925 11 11 11 11-4.925 11-11S17.075 0 11 0zM2 11c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0111.065 13a8.983 8.983 0 017.092 3.458A9.001 9.001 0 102 11zm9 9a8.963 8.963 0 01-5.672-2.012A6.991 6.991 0 0111.065 15a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0111 20z"
      fill={props.fill}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
