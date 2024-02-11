import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IconButtonProps } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StyledIconButton = styled(
  (props: IconButtonProps & { expand: boolean }) => {
    const { expand, children, ...other } = props;
    return <IconButton {...other}>{children}</IconButton>;
  }
)(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ExpandMoreProps {
  expand: boolean;
  onClick: () => void;
}

const ExpandMoreButton: React.FC<ExpandMoreProps> = ({ expand, onClick }) => {
  return (
    <StyledIconButton
      expand={expand}
      onClick={onClick}
      aria-expanded={expand}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </StyledIconButton>
  );
};

export default ExpandMoreButton;
