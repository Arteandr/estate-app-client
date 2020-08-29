import React from "react";
import { Svg, Path, Mask } from "react-native-svg";

//COLORS
import colors from "../../src/utils/colors";

export default function EyeIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 6.09A2.455 2.455 0 109 11a2.455 2.455 0 000-4.91zm0 6.546a4.09 4.09 0 110-8.181 4.09 4.09 0 010 8.181zM9 2.41c-4.09 0-7.585 2.545-9 6.136 1.415 3.592 4.91 6.137 9 6.137s7.584-2.545 9-6.137C16.584 4.954 13.09 2.41 9 2.41z"
        fill={colors.dark}
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={2}
        width={18}
        height={13}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 6.09A2.455 2.455 0 109 11a2.455 2.455 0 000-4.91zm0 6.546a4.09 4.09 0 110-8.181 4.09 4.09 0 010 8.181zM9 2.41c-4.09 0-7.585 2.545-9 6.136 1.415 3.592 4.91 6.137 9 6.137s7.584-2.545 9-6.137C16.584 4.954 13.09 2.41 9 2.41z"
          fill="#fff"
        />
      </Mask>
    </Svg>
  );
}
