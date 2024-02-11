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
import { DataSmokedSalmon, DataBacon, DataAvocado } from "./DataCreator";


function Row(props: { row: any }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell sx={{ padding: "3px" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>
          <img
            src={row.image}
            alt={row.name}
            style={{ width: "95px", borderRadius: "8px" }}
          />
        </TableCell>
        <TableCell>{row.name}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align='center' sx={{ padding: '2px' }}></TableCell>
                    <TableCell align='center'sx={{ padding: '4px' }}>Ingredient</TableCell>
                    <TableCell align='center'sx={{ padding: '4px' }}>Conversion Factor</TableCell>
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
                        <TableCell align='center' sx={{ padding: '2px' }}>
                          <FontAwesomeIcon icon={icon} />
                        </TableCell>
                        <TableCell align='center' sx={{ padding: '4px' }}>{ingredient}</TableCell>
                        <TableCell align='center' sx={{ padding: '4px' }}>{conversion}</TableCell>
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
    image: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.object.isRequired,
        ingredient: PropTypes.string.isRequired,
        conversion: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  DataSmokedSalmon(
    "Smoked Salmon Avocado Toast",
    5,
    "/public/smoked_salmon.jpeg"
  ),
  DataBacon("Bacon Tomato Avocado Toast", 5, "/public/bacon.jpeg"),
  DataAvocado("Original Avocado Toast", 5, "/public/avocado.jpeg"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small">
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
