import React from "react";
import {ColumnDefinitionType, TableHeaderProps} from "./types";
const TableHeader = <T, K extends keyof T>({columns}: TableHeaderProps<T, K>): JSX.Element => {
    const headers = columns.map((column: ColumnDefinitionType<T, K>, index: any) => {
        const style = {
            width: 100,
            border: "1px solid black",
            padding: "8px"
        };

        return (
            <th key={`headerCell-${index}`} style={style}>
                {column.header}
            </th>
        );
    });

    return (
        <thead>
            <tr>{headers}</tr>
        </thead>
    );
};

export {TableHeader};
