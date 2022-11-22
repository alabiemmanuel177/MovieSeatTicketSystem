import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { TableT } from "./Table";

export const TechSpaceTable = ({ movie }) => {

    return (
        <>
            <div className="patient-table">
                <React.Fragment>
                    <h3>Details</h3>
                    <Table >
                        <TableBody>
                            <TableRow>
                                <TableCell className="tablecell">{movie.dateofair}</TableCell>
                                <TableCell className="tablecell">{movie.timeofair}</TableCell>
                                <TableCell className="tablecell">{movie.cinemalocation}</TableCell>
                            </TableRow>
                        </TableBody>
                        <TableT movie={movie} />
                    </Table>
                </React.Fragment>
            </div>
        </>
    );
};



