import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = props => (
  <Svg
    width={25}
    height={25}
    xmlns="http://www.w3.org/2000/svg"
    shadowRadius={30}
    {...props}>
    <Path
      d="M13.596.554a1.55 1.55 0 0 0-2.192 0L.554 11.404a1.55 1.55 0 0 0 2.192 2.192l.454-.454V23.35a1.55 1.55 0 0 0 1.55 1.55h3.1a1.55 1.55 0 0 0 1.55-1.55v-3.1a1.55 1.55 0 0 1 1.55-1.55h3.1a1.55 1.55 0 0 1 1.55 1.55v3.1a1.55 1.55 0 0 0 1.55 1.55h3.1a1.55 1.55 0 0 0 1.55-1.55V13.142l.454.454a1.55 1.55 0 0 0 2.192-2.192L13.596.554Z"
      fill={props.fill}
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
