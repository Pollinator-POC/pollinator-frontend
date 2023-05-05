import {TableRows} from "./TableRows";
import React from "react";
import {TableHeader} from "./TableHeader";
import {TableProps} from "./types";
const style = {
    borderCollapse: "collapse",
    border: "1px solid",
    width: "50%",
    padding: "8px"
} as const;

const Table = ({data, columns}: TableProps<any, any>): JSX.Element => {
    return (
        <table style={style}>
            <TableHeader columns={columns} />
            <TableRows data={data} columns={columns} />
        </table>
    );
};

export {Table};
