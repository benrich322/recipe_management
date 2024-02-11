import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import { grey } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBreadSlice } from "@fortawesome/free-solid-svg-icons";
import ExpandMoreButton from "./ExpandMoreButton";
import CollapsibleTable from "./Table";

interface RecipeReviewCardProps {
  title: string;
  count: number;
}

export default function RecipeReviewCard({
  title,
  count,
}: RecipeReviewCardProps) {
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
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        }
        title={title}
        subheader={`Sku Count: ${count}`}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ padding: 0, "&:last-child": { paddingBottom: 0 } }}>
          <CollapsibleTable />
        </CardContent>
      </Collapse>
    </Card>
  );
}
