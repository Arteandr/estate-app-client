import React from "react";
import { Svg, Path, Mask } from "react-native-svg";

//COLORS
import colors from "../../src/utils/colors";

export default function CheckCircleIcon() {
  return (
    <Svg width={18} height={18} viewBox="0 0 18 18" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 16.2c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 3.969-3.231 7.2-7.2 7.2zm4.131-11.178L7.2 10.953 4.869 8.631 3.6 9.9l3.6 3.6 7.2-7.2-1.269-1.278z"
        fill={colors.success}
      />
      <Mask
        id="prefix__a"
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={18}
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0C4.05 0 0 4.05 0 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 16.2c-3.969 0-7.2-3.231-7.2-7.2 0-3.969 3.231-7.2 7.2-7.2 3.969 0 7.2 3.231 7.2 7.2 0 3.969-3.231 7.2-7.2 7.2zm4.131-11.178L7.2 10.953 4.869 8.631 3.6 9.9l3.6 3.6 7.2-7.2-1.269-1.278z"
          fill="#fff"
        />
      </Mask>
    </Svg>
  );
}
