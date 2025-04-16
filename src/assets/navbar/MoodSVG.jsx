import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const MoodSVG = ({ fill = '#000', width = 25, height = 24, ...props }) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        {...props}
    >
        <Path
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 2m5-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9 2h6"
        />
    </Svg>
);

export default MoodSVG;
