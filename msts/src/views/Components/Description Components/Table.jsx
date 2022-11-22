import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

export const TableT = ({ movie }) => {


    return (
        <>
            <TableBody>
                <TableRow>
                    <TableCell className="tablecell">{movie.duration}</TableCell>
                    <TableCell className="tablecell">{movie.dimension}</TableCell>
                    <TableCell className="tablecell">{movie.pgrating}</TableCell>
                </TableRow>
            </TableBody>
        </>
    );
};