import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { IconButton, IconButtonProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import ExpandMoreButton from "./ExpandMoreButton";
import CollapsibleTable from './Table';

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: grey[500] }} aria-label="recipe">
            <FontAwesomeIcon icon={faBreadSlice} />
          </Avatar>
        }
        action={
          <CardActions>
            <ExpandMoreButton
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            />
          </CardActions>
        }
        title="Toast"
        subheader="Sku Count: 3"
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardMedia
          component="img"
          height="250"
          image="/public/smoked_salmon.jpeg"
          alt="Smoked Salmon"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Avocado mash with everything spice, topped with Ducktrap’s
            Atlantic-caught smoked salmon, & pickled red onion. All avo’ toasts
            are served on local sourdough. Made to order.
          </Typography>
        <CollapsibleTable></CollapsibleTable>
        </CardContent>
      </Collapse>
    </Card>
  );
}
