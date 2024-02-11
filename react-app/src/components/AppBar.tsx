import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { grey } from '@mui/material/colors';

function ResponsiveAppBar() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: grey[50] }}
      style={{ maxWidth: 1000 }}
    >
      {" "}
      <Container>
        <Toolbar>
          <img
            src="foxtrot-logo-black.svg"
            alt="Logo"
            style={{ marginRight: "20px", width: "35px", height: "auto" }} // Update the width and height here
          />
          <Typography variant="h5" color="textPrimary">
            Recipe Management
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
