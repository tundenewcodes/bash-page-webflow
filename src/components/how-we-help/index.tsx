import BioCards from "./bio-card";

import { HorizontalRule } from "./HorizontalRule";
import { useTheme } from "../../context/ThemeContext";
import { Colors } from "../../utils/colors/colors";
import { Row } from "react-bootstrap";

export default function BioLinkCards() {
  const { isDarkMode } = useTheme();
  const { darkOrangeColor, lightGreenColor } = Colors();
  return (
    <Row
      style={{
        margin: "60px 0px",
      }}
    >
      <HorizontalRule
        text="LINKS"
        textColor={isDarkMode ? darkOrangeColor : lightGreenColor}
        style={{}}
      />
      <BioCards />
    </Row>
  );
}
