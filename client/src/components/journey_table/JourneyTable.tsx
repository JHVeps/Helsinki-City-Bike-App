import { Box, Paper, TableContainer, Table } from "@mui/material";
import TableBodyHome from "components/tablebody/TableBodyHome";
import TableHeadHome from "components/tablehead/TableHeadHome";

const JourneyTable = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer sx={{ backgroundColor: "#111" }}>
          <Table sx={{ minWidth: 900 }} size={"medium"}>
            <TableHeadHome />
            <TableBodyHome />
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default JourneyTable;
