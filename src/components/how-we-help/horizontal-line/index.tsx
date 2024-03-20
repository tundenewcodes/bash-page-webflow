import { useTheme } from "../../../context/ThemeContext";
import { Colors } from "../../../utils/colors/colors";
import { HorizontalRule } from "../HorizontalRule";

const HorizontalLine = () => {
  const { isDarkMode } = useTheme();
  const { darkOrangeColor, lightGreenColor } = Colors();
  return (
    <HorizontalRule
      text="LINKS"
      textColor={isDarkMode ? darkOrangeColor : lightGreenColor}
      style={{}}
    />
  );
};

export default HorizontalLine;
