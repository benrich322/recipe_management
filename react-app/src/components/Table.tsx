import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { createData, nameList, imageList, historyList } from "./DataCreator"; // Import createData function
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface RowData {
  id?: string;
  name: string;
  image: string;
  history: {
    icon: object;
    ingredient: string;
    conversion: string | number | JSX.Element;
  }[];
}

function Row(props: { row: RowData }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={row.id}>
        <TableCell style={{ display: "flex", alignItems: "center" }}>
          <img
            src={row.image}
            alt={row.name}
            style={{ maxWidth: "75px", height: "auto", borderRadius: "8px" }}
          />
          <span style={{ marginLeft: "20px" }}>{row.name}</span>
        </TableCell>
        <TableCell style={{ textAlign: "right" }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      sx={{ padding: "2px" }}
                    ></TableCell>
                    <TableCell align="center" sx={{ padding: "4px" }}>
                      Ingredient
                    </TableCell>
                    <TableCell align="center" sx={{ padding: "4px" }}>
                      Conversion Factor
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map(
                    ({ icon, ingredient, conversion }, index) => (
                      <TableRow key={`${row.id}-${index}`}>
                        {" "}
                        {/* Ensure keys are unique */}
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          <FontAwesomeIcon icon={icon as IconDefinition} />
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "4px" }}>
                          {ingredient}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "4px" }}>
                          {conversion}
                        </TableCell>
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

const rows = createData(nameList, imageList, historyList);

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
