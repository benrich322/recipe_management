import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#e1e1e1", // Adjusted background color to be a little lighter
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 180,
    fontSize: theme.typography.pxToRem(12),
    "& .MuiTooltip-arrow": {
      color: "#e1e1e1", // Adjusted arrow color to match the background color
    },
  },
}));

export default function CustomizedTooltips() {
  return (
    <div>
      <HtmlTooltip
        title={
          <React.Fragment>
            {"1 loaf of sourdough can make 12 Salmon Avocado Toasts"}
          </React.Fragment>
        }
        arrow
      >
        <Button>0.083</Button>
      </HtmlTooltip>
    </div>
  );
}
