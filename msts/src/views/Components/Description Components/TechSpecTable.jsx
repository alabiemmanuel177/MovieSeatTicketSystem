import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { TableT } from "./Table";

export const TechSpaceTable = () => {

    return (
        <>
            <div className="patient-table">
                <React.Fragment>
                    <h3>Details</h3>
                    <Table >
                        <TableBody>
                            <TableRow>
                                <TableCell className="tablecell">25th November </TableCell>
                                <TableCell className="tablecell">3:00 p.m</TableCell>
                                <TableCell className="tablecell">Cinema A</TableCell>
                            </TableRow>
                        </TableBody>
                            <TableT />
                    </Table>
                </React.Fragment>
            </div>
        </>
    );
};



