import React from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";

export const TicketsTable = ({ tickets }) => {

    return (
        <>
            <div className="patient-table">
                <React.Fragment>
                    <h3>Details</h3>
                    <Table >
                        <TableHead>
                            <TableRow>
                                <TableCell className="tablecell">Full Name</TableCell>
                                <TableCell className="tablecell">Email</TableCell>
                                <TableCell className="tablecell">Phone No</TableCell>
                                <TableCell className="tablecell">Address</TableCell>
                                <TableCell className="tablecell">Movie</TableCell>
                                <TableCell className="tablecell">Seats</TableCell>
                            </TableRow>
                        </TableHead>
                        {tickets.map((p) => (
                            <TicketT ticket={p} />
                        ))}
                    </Table>
                </React.Fragment>
            </div>
        </>
    );
};

const TicketT = ({ ticket }) => {
    return (
        <>
            <TableBody>
                <TableRow>
                    <TableCell className="tablecell">{ticket.fullname}</TableCell>
                    <TableCell className="tablecell">{ticket.email}</TableCell>
                    <TableCell className="tablecell">{ticket.phoneno}</TableCell>
                    <TableCell className="tablecell">{ticket.address}</TableCell>
                    <TableCell className="tablecell">{ticket.movie}</TableCell>
                    <TableCell className="tablecell">{ticket.seats}</TableCell>
                </TableRow>
            </TableBody>
        </>
    );
};
