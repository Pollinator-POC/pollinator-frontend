import React from "react";
import {TableRowsProps} from "./types";

const style = {
    border: "1px solid black",
    padding: "8px"
};

const TableRows = <T, K extends keyof T>({
    data,
    columns
}: TableRowsProps<any, any>): JSX.Element => {
    const rows = data.map((row, index) => {
        return (
            <tr key={`row-${index}`}>
                {columns.map((column, cellIndex) => {
                    if (column.key === "chargePointId")
                        return (
                            <td key={`cell-${cellIndex}`} style={style}>
                                {row.charge_point_id}
                            </td>
                        );
                    else
                        return (
                            <td key={`cell-${cellIndex}`} style={style}>
                                {row.status}
                            </td>
                        );
                })}
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
};

export {TableRows};
