import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function createData(name: string, ingredientCount: number) {
  return {
    name,
    ingredientCount,
    history: [
      {
        icon: faCalendar,
        ingredient: "Sourdough",
        conversion: 0.083,
      },
      {
        icon: faCalendar,
        ingredient: "Smoked Salmon",
        conversion: 0.25,
      },
      {
        icon: faCalendar,
        ingredient: "Pickle Onion",
        conversion: 0.083,
      },
      {
        icon: faCalendar,
        ingredient: "Everything Spice",
        conversion: 0.043,
      },
      {
        icon: faCalendar,
        ingredient: "Avocado Mash Kit",
        conversion: 0.167,
      },
    ],
  };
}

function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.ingredientCount}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Recipe
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Icon</TableCell>
                    <TableCell>Ingredient</TableCell>
                    <TableCell>Conversion Factor</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(
                    ({
                      icon,
                      ingredient,
                      conversion,
                    }: {
                      icon: any;
                      ingredient: string;
                      conversion: string | number;
                    }) => (
                      <TableRow key={icon}>
                        <TableCell>
                          <FontAwesomeIcon icon={icon} />
                        </TableCell>
                        <TableCell>{ingredient}</TableCell>
                        <TableCell align="right">{conversion}</TableCell>
                      </TableRow>
                    )
                  )}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    ingredientCount: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.object.isRequired, // Update icon PropTypes
        ingredient: PropTypes.string.isRequired,
        conversion: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired, // Update conversion PropTypes
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData("Smoked Salmon Avocado Toast", 5),
  createData("Bacon Tomato Avocado Toast", 5),
  createData("Original Avocado Toast", 5),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Title</TableCell>
            <TableCell align="center">Ingredient Count</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
