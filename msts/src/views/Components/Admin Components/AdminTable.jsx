import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";

export const AdminTable = ({ admins }) => {

  return (
    <>
      <div className="patient-table">
        <React.Fragment>
          <h3>Details</h3>
          <Table >
            <TableHead>
              <TableRow>
                <TableCell className="tablecell">FullName</TableCell>
                <TableCell className="tablecell">Email</TableCell>
              </TableRow>
            </TableHead>
            {admins.map((p) => (
              <AdminT admin={p} />
            ))}
          </Table>
        </React.Fragment>
      </div>
    </>
  );
};

const AdminT = ({ admin }) => {
  return (
    <>
      <TableBody>
        <TableRow>
          <TableCell className="tablecell">{admin.fullname}</TableCell>
          <TableCell className="tablecell">{admin.email}</TableCell>
        </TableRow>
      </TableBody>
    </>
  );
};
