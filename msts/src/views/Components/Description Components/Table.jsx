import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import config from "./config";

export const TableT = () => {
    // const [admin, setAdmin] = useState([]);
    // useEffect(() => {
    //     const getPost = async () => {
    //         const res = await axios.get(`${config.baseURL}/api/admin/${record.admin}`);
    //         setAdmin(res.data.fullname);

    //     };
    //     getPost();
    // });

    return (
        <>
            <TableBody>
                <TableRow>
                    <TableCell className="tablecell">2h 37m</TableCell>
                    <TableCell className="tablecell">3D</TableCell>
                    <TableCell className="tablecell">PG 13</TableCell>
                </TableRow>
            </TableBody>
        </>
    );
};