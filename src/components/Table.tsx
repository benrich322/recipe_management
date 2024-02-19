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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IngredientTable {
  icon: IconDefinition;
  ingredient: string;
  conversion: string | number | JSX.Element;
  detail: string;
}

interface RowData {
  id?: string;
  name: string;
  image: string;
  ingredientList: IngredientTable[];
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
                    <TableCell
                      align="center"
                      sx={{ padding: "4px" }}
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.ingredientList.map(
                    ({ icon, ingredient, conversion, detail }, index) => (
                      <TableRow key={`${row.id}-${index}`}>
                        {" "}
                        {/* Ensure keys are unique */}
                        <TableCell align="center" sx={{ padding: "2px" }}>
                          <FontAwesomeIcon icon={icon} />
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "4px" }}>
                          {ingredient}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "4px" }}>
                          {conversion}
                        </TableCell>
                        <TableCell align="center" sx={{ padding: "4px" }}>
                          {detail}
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

interface CollapsibleTableProps {
  data: RowData[];
}

function CollapsibleTable({ data }: CollapsibleTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table" size="small">
        <TableBody>
          {data.map((rowData, index) => (
            <Row key={index} row={rowData} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable;
